import { Router } from 'express'
import { CommentController } from '../controllers'

const commentRouter = Router()

commentRouter.put('/', CommentController.create)

commentRouter.post('/:commentId/like', CommentController.like)

commentRouter.post('/:commentId/dislike', CommentController.dislike)

export { commentRouter }
