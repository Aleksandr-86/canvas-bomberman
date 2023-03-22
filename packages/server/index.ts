import * as dotenv from 'dotenv'
dotenv.config()

import { cspMiddleware, ssrMiddleware } from './middlewares'
import cors from 'cors'
import { createServer as createViteServer, type ViteDevServer } from 'vite'
import path from 'path'
import express from 'express'
import { sequelize } from './db'
import { apiRoutes } from './routes'
import cookieParser from 'cookie-parser'

const PORT = Number(process.env.SERVER_PORT) || 3002
const LOCAL_ORIGINS = [`http://127.0.0.1:${PORT}`, `http://localhost:${PORT}`]

export const isDev = () => process.env.NODE_ENV === 'development'

async function createServer() {
  const app = express()

  app.use(
    cors({
      credentials: true,
      origin: [...LOCAL_ORIGINS],
    })
  )

  if (!isDev()) {
    app.use(cspMiddleware())
  }

  app.use(cookieParser())

  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))

  app.use('/api', apiRoutes)

  /**
   * Подключение vite middleware для горячей перезагрузки
   * модулей (HMR)
   */
  let vite: ViteDevServer | undefined
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

  app.use('*', ssrMiddleware({ vite, srcPath, distPath }))

  return app
}

async function start() {
  await sequelize.sync()
  const server = await createServer()

  server.listen(PORT, () => {
    console.log(`  ➜ 🎸 Сервер слушает порт: ${PORT}`)
  })
}

start()
