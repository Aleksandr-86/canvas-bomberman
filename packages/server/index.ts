import { cspMiddleware } from './middlewares/cspMiddleware'
import { proxyMiddleware } from './middlewares/proxyMiddleware'
import { authMiddleware } from './middlewares/authMiddleware'
import { ssrMiddleware } from './middlewares/ssrMiddleware'
import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'
import path from 'node:path'

import express from 'express'
import { postgressConnect } from './db'

const PORT = Number(process.env.SERVER_PORT) || 3001
export const isDev = () => process.env.NODE_ENV === 'development'

async function createServer() {
  const app = express()

  let vite: ViteDevServer | undefined

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))
  const assetDir = path.join(distPath, 'assets')

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
   */
  app.use('/assets', express.static(assetDir))

  if (isDev()) {
    vite = await (
      await import('vite')
    ).createServer({
      server: { middlewareMode: true },
      root: distPath,
      appType: 'custom',
    })
    app.use(vite.middlewares)
  }

  app.use('*', authMiddleware, ssrMiddleware({ vite, srcPath, distPath }))

  return app
}

async function startServer() {
  await postgressConnect()

  const server = await createServer()

  server.listen(PORT, () => {
    console.log(`  ➜ 🎸 Сервер слушает порт: ${PORT}`)
  })
}

startServer()
