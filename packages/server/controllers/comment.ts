import type { Handler } from 'express'
import { Comment } from '../models'

export const like: Handler = async (req, res) => {
  const { commentId } = req.params

  const comment = await Comment.findByPk(commentId)

  if (comment) {
    comment.increment('like_count')
    res.status(200).json({ comment })
  } else {
    res.status(404).json({ reason: 'couldnt find comment' })
  }
}

export const dislike: Handler = async (req, res) => {
  const { commentId } = req.params

  const comment = await Comment.findByPk(commentId)

  if (comment) {
    comment.increment('dislike_count')
    res.status(200).json({ comment })
  } else {
    res.status(404).json({ reason: 'couldnt find comment' })
  }
}

export const create: Handler = async (req, res) => {
  const { realUser } = req.cookies
  const { body, topicId } = req.body

  const newComment = await Comment.create({
    topic_id: Number(topicId),
    user_id: realUser.id,
    body,
  })

  res.status(200).json(newComment.toJSON())
}
