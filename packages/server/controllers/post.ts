import type { Handler } from 'express'

export const getAllPosts: Handler = () => {
  console.log('got list of topics')
}

export const createNewPost: Handler = () => {
  console.log('added topic to this user topics')
}

export const getTopicComments: Handler = () => {
  console.log('got all comments of this topic')
}
