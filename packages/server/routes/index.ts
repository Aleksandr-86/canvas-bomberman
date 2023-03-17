import express, { Router } from 'express'
import cookieParser from 'cookie-parser'
import * as PostsController from '../controllers/post'
import * as CommentsController from '../controllers/comment'

const appRoutes = Router()

appRoutes.use([express.json(), cookieParser()])

appRoutes.get('/posts', PostsController.getAllPosts)
appRoutes.post('/posts', PostsController.createNewPost)
appRoutes.get('/posts/:id', PostsController.getTopicComments)

appRoutes.post('/message', CommentsController.addTopicComment)

appRoutes.post('/likes', CommentsController.addTopicLike)
appRoutes.post('/dislikes', CommentsController.addTopicDislike)

export { appRoutes }
