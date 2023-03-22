import { Router } from 'express'
import { CommentController, PostController } from '../controllers'

const postRouter = Router()

postRouter.get('/', PostController.allPosts)

postRouter.put('/', PostController.createPost)

postRouter.get('/:id', PostController.allComments)

export { postRouter }
