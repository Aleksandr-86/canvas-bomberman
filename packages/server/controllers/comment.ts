import type { Handler } from 'express'

export const addTopicLike: Handler = () => {
  console.log('post liked')
}

export const addTopicDislike: Handler = () => {
  console.log('post disliked')
}

export const addTopicComment: Handler = () => {
  console.log('added comment to this topic')
}
