import { cspMiddleware } from './middlewares/cspMiddleware'
import { proxyMiddleware } from './middlewares/proxyMiddleware'
import { authMiddleware } from './middlewares/authMiddleware'
import { ssrMiddleware } from './middlewares/ssrMiddleware'
import dotenv from 'dotenv'
import cors from 'cors'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'
import * as path from 'path'

dotenv.config()

import express from 'express'

export const isDev = () => process.env.NODE_ENV === 'development'

async function startServer() {
  const app = express()

  const port = Number(process.env.SERVER_PORT) || 3001

  let vite: ViteDevServer | undefined

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))

  app.use(cors())
  app.use(cspMiddleware())
  app.use('/api', proxyMiddleware)

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

  /**
   * Проброс статичных файлов из папки assets
   * (необходим при эксплуатации приложения)
   */
  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  app.use('*', authMiddleware, ssrMiddleware({ vite, srcPath, distPath }))

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Сервер слушает порт: ${port}`)
  })
}

startServer()
