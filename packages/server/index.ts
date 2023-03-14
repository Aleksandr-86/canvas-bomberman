import type { ViteDevServer } from 'vite'
import express from 'express'
import serialize from 'serialize-javascript'
import dotenv from 'dotenv'
import cors from 'cors'
import { cspMiddleware } from './middlewares/cspMiddleware'
import path from 'node:path'
import fs from 'node:fs/promises'
import { getStylesheets } from './helpers/getStylesheets'
import { postgressConnect } from 'db'

dotenv.config()

const PORT = Number(process.env.SERVER_PORT) || 3001
const distDir = path.dirname(require.resolve('client/dist/index.html'))
const srcDir = path.dirname(require.resolve('client'))
const prodSSREntrypoint = require.resolve('client/dist-ssr/ssr.cjs')
const devSSREntrypoint = path.resolve(srcDir, 'ssr.tsx')
const srcTemplate = path.resolve(srcDir, 'index.html')
const distTemplate = path.resolve(distDir, 'index.html')
const stylesheetsDir = path.join(distDir, 'assets')
const assetsDir = path.resolve(distDir, 'assets')

async function createServer(isProd = process.env.NODE_ENV === 'production') {
  const app = express()

  const stylesheetTags = isProd ? await getStylesheets(stylesheetsDir) : ''

  /**
   * Глобальные middleware
   */
  app.use([cors(), cspMiddleware()])

  /**
   * Проброс статичных файлов из папки assets
   */
  app.use('/assets', express.static(assetsDir))

  let vite: ViteDevServer
  if (!isProd) {
    vite = await (
      await import('vite')
    ).createServer({
      server: { middlewareMode: true },
      root: srcDir,
      appType: 'custom',
    })
    app.use(vite.middlewares)
  }

  app.get('/api', (_, res) => {
    res.json('👋 Привет от сервера :)')
  })

  app.use('*', async (req: any, res, next) => {
    const url = req.originalUrl

    try {
      const template = await (isProd
        ? fs.readFile(distTemplate, 'utf-8')
        : vite.transformIndexHtml(url, await fs.readFile(srcTemplate, 'utf-8')))

      const { render, prepareStore } = await (isProd
        ? import(prodSSREntrypoint)
        : vite.ssrLoadModule(devSSREntrypoint))

      const store = await prepareStore(url)
      const appHtml = await render(url, store)

      const appStore = `<script>window.__PRELOADED_STATE__ = ${serialize(
        store.getState(),
        { isJSON: true }
      )}</script>`

      const html = template
        .replace('<!--ssr-styles-->', stylesheetTags)
        .replace('<!--ssr-outlet-->', appHtml)
        .replace('<!--ssr-store-->', appStore)
        .replace(/<script/g, `<script nonce="${req.nonce}"`)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (error) {
      if (!isProd) {
        vite.ssrFixStacktrace(error as Error)
      }
      next(error)
    }
  })

  await postgressConnect()

  app.listen(PORT, () => {
    console.log(`  ➜ 🎸 Сервер слушает порт: ${PORT}`)
  })
}

createServer()
