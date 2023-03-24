'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.postRouter = void 0
const express_1 = require('express')
const controllers_1 = require('../controllers')
const postRouter = (0, express_1.Router)()
exports.postRouter = postRouter
postRouter.get('/', controllers_1.PostController.allPosts)
postRouter.put('/', controllers_1.PostController.createPost)
postRouter.get('/:id', controllers_1.PostController.allComments)
//# sourceMappingURL=posts.js.map
