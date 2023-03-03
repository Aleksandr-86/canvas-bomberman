import dotenv from 'dotenv'
import cors from 'cors'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'

dotenv.config()

import express from 'express'
import { promises as fs } from 'fs'
import * as path from 'path'

const isDev = () => process.env.NODE_ENV === 'development'

async function startServer() {
  const app = express()

  const port = Number(process.env.SERVER_PORT) || 3001

  app.use(cors())

  let vite: ViteDevServer | undefined

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const ssrClientPath = require.resolve('client/dist-ssr/ssr.cjs')
  const srcPath = path.dirname(require.resolve('client'))

  /**
   * Решение заимствовано отсюда:
   * https://github.com/jonluca/vite-typescript-ssr-react/blob/e8e001903fa46248cf6e2a33ae34aaa579448ea5/server.ts#L12-L26
   */
  const getStyleSheets = async () => {
    try {
      const assetPath = path.join(distPath, 'assets')
      const files = await fs.readdir(assetPath)
      const cssAssets = files.filter(l => l.endsWith('.css'))
      const allContent = []
      for (const asset of cssAssets) {
        const content = await fs.readFile(path.join(assetPath, asset), 'utf-8')
        allContent.push(`<style type="text/css">${content}</style>`)
      }
      return allContent.join('\n')
    } catch {
      return ''
    }
  }

  /**
   * Подключение vite middleware для горячей перезагрузки
   * модулей (HMR)
   */
  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })

    app.use(vite.middlewares)
  }

  app.get('/api', (_, res) => {
    res.json('👋 Привет от сервера :)')
  })

  /**
   * Проброс статичных файлов из папки assets
   * (необходим при эксплуатации приложения)
   */
  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  const styleSheets = getStyleSheets()

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template: string

      let render: (url: string, store: object) => Promise<string>
      let prepareStore: (url: string) => any

      if (isDev() && vite) {
        template = await fs.readFile(
          path.resolve(srcPath, 'index.html'),
          'utf-8'
        )
        template = await vite.transformIndexHtml(url, template)

        render = (await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
          .render
        prepareStore = (
          await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
        ).prepareStore
      } else {
        template = await fs.readFile(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )

        render = (await import(ssrClientPath)).render
        prepareStore = (await import(ssrClientPath)).prepareStore
      }

      const cssAssets = isDev() ? await styleSheets : ''
      const store = await prepareStore(url)
      const appHtml = await render(url, store)

      const appStore = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(
        store.getState()
      )}</script>`

      const html = template
        .replace(`<!--ssr-styles-->`, cssAssets)
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`<!--ssr-store-->`, appStore)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (isDev() && vite) {
        vite.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Сервер слушает порт: ${port}`)
  })
}

startServer()
