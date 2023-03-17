import type { Handler } from 'express'

export const getAllPosts: Handler = (req, res) => {
  console.log('got list of topics')
}

export const createNewPost: Handler = (req, res) => {
  console.log('added topic to this user topics')
}

export const getTopicComments: Handler = (req, res) => {
  console.log('got all comments of this topic')
}
