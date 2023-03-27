import type { Handler } from 'express'
import { Topic, Comment } from '../models'

export const allPosts: Handler = async (req, res) => {
  const posts = await Topic.findAll()

  if (posts) {
    res.status(200).json({ posts })
  } else {
    res.status(404).json({ reason: 'no posts found' })
  }
}

export const createPost: Handler = async (req, res) => {
  const { text } = req.body
  const { realUser } = req.cookies
  const post = await Topic.create({
    body: text,
    user_id: realUser.id,
  })

  res.json(post.toJSON())
}

export const allComments: Handler = async (req, res) => {
  const { postId } = req.params

  const comments = await Comment.findAll({ where: { id: postId } })

  if (comments) {
    res.status(200).json({ comments })
  } else {
    res.status(404).json({ reason: 'no comments found' })
  }
}
