import { Router } from 'express'
import { CommentController, PostController } from '../controllers'

const postRouter = Router()

postRouter.get('/', PostController.allPosts)

postRouter.put('/', PostController.createPost)

postRouter.get('/:id', PostController.allComments)

postRouter.put('/:id', CommentController.create)

postRouter.post('/:id/like', CommentController.like)

postRouter.post('/:id/dislike', CommentController.dislike)

export { postRouter }
