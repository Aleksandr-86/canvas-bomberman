import dotenv from 'dotenv'
import cors from 'cors'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'

dotenv.config()

import express from 'express'
import * as fs from 'fs'
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

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      let template: string

      let render: (url: string) => Promise<string>

      if (isDev() && vite) {
        template = fs.readFileSync(path.resolve(srcPath, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)

        render = (await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
          .render
      } else {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )

        render = (await import(ssrClientPath)).render
      }

      const appHtml = await render(url)

      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

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
