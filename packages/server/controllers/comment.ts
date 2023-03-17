import type { Handler } from 'express'

export const addTopicLike: Handler = (req, res) => {
  console.log('post liked')
}

export const addTopicDislike: Handler = (req, res) => {
  console.log('post disliked')
}

export const addTopicComment: Handler = (req, res) => {
  console.log('added comment to this topic')
}
