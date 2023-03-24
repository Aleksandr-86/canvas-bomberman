'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.commentRouter = void 0
const express_1 = require('express')
const controllers_1 = require('../controllers')
const commentRouter = (0, express_1.Router)()
exports.commentRouter = commentRouter
commentRouter.put('/', controllers_1.CommentController.create)
commentRouter.post('/:commentId/like', controllers_1.CommentController.like)
commentRouter.post(
  '/:commentId/dislike',
  controllers_1.CommentController.dislike
)
//# sourceMappingURL=comment.js.map
