import express, { Router } from 'express'
import cookieParser from 'cookie-parser'
import { themeRoutes } from './theme'
import { postRouter } from './posts'
import { commentRouter } from './comment'
import { proxyMiddleware } from '../middlewares/proxyMiddleware'

const apiRoutes = Router()

apiRoutes.use([express.json(), cookieParser()])

apiRoutes.use('/theme', themeRoutes)
apiRoutes.use('/posts', postRouter)
apiRoutes.use('/comments', commentRouter)
// apiRoutes.use('/', proxyMiddleware)

export { apiRoutes }
