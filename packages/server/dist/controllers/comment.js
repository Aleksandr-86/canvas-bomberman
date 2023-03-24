'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.create = exports.dislike = exports.like = void 0
const models_1 = require('../models')
const like = async (req, res) => {
  const { commentId } = req.params
  const comment = await models_1.Comment.findByPk(commentId)
  if (comment) {
    comment.increment('like_count')
    res.status(200).json({ comment })
  } else {
    res.status(404).json({ reason: 'couldnt find comment' })
  }
}
exports.like = like
const dislike = async (req, res) => {
  const { commentId } = req.params
  const comment = await models_1.Comment.findByPk(commentId)
  if (comment) {
    comment.increment('dislike_count')
    res.status(200).json({ comment })
  } else {
    res.status(404).json({ reason: 'couldnt find comment' })
  }
}
exports.dislike = dislike
const create = async (req, res) => {
  const { realUser } = req.cookies
  const { body, topicId } = req.body
  const newComment = await models_1.Comment.create({
    topic_id: Number(topicId),
    user_id: realUser.id,
    body,
  })
  res.status(200).json(newComment.toJSON())
}
exports.create = create
//# sourceMappingURL=comment.js.map
