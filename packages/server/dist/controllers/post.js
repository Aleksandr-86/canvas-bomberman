'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.allComments = exports.createPost = exports.allPosts = void 0
const models_1 = require('../models')
const allPosts = async (req, res) => {
  const posts = await models_1.Topic.findAll()
  if (posts) {
    res.status(200).json({ posts })
  } else {
    res.status(404).json({ reason: 'no posts found' })
  }
}
exports.allPosts = allPosts
const createPost = async (req, res) => {
  const { text } = req.body
  const { realUser } = req.cookies
  const post = await models_1.Topic.create({
    body: text,
    user_id: realUser.id,
  })
  res.json(post.toJSON())
}
exports.createPost = createPost
const allComments = async (req, res) => {
  const { postId } = req.params
  const comments = await models_1.Comment.findAll({ where: { id: postId } })
  if (comments) {
    res.status(200).json({ comments })
  } else {
    res.status(404).json({ reason: 'no comments found' })
  }
}
exports.allComments = allComments
//# sourceMappingURL=post.js.map
