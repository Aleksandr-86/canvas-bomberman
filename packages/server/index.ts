import * as dotenv from 'dotenv'
dotenv.config()

import { cspMiddleware } from './middlewares/cspMiddleware'
import { authMiddleware } from './middlewares/authMiddleware'
import { ssrMiddleware } from './middlewares/ssrMiddleware'
import cors from 'cors'
import { createServer as createViteServer, type ViteDevServer } from 'vite'
import path from 'path'
import express from 'express'
import { sequelize } from './db'
import { appRouter } from './routes'

const PORT = Number(process.env.SERVER_PORT) || 3002

export const isDev = () => process.env.NODE_ENV === 'development'

async function createServer() {
  const app = express()

  app.use(cors())
  app.use(cspMiddleware())

  let vite: ViteDevServer | undefined

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))

  app.use('/api', appRouter)

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
  app.use('/assets', express.static(path.resolve(distPath, 'assets')))

  await sequelize.sync()

  return app
}

async function start() {
  const server = await createServer()

  server.listen(PORT, () => {
    console.log(`  ➜ 🎸 Сервер слушает порт: ${PORT}`)
  })
}

start()
