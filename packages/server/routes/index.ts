import express, { Router } from 'express'
import cookieParser from 'cookie-parser'
import * as PostsController from '../controllers/post'
import * as CommentsController from '../controllers/comment'
import { proxyMiddleware } from '../middlewares/proxyMiddleware'
import { themeRouter } from './theme'

const appRouter = Router()

appRouter.use([express.json(), cookieParser(), proxyMiddleware])

appRouter.use(themeRouter)
appRouter.get('/posts', PostsController.getAllPosts)
appRouter.post('/posts', PostsController.createNewPost)
appRouter.get('/posts/:id', PostsController.getTopicComments)

appRouter.post('/message', CommentsController.addTopicComment)

appRouter.post('/likes', CommentsController.addTopicLike)
appRouter.post('/dislikes', CommentsController.addTopicDislike)

export { appRouter }
