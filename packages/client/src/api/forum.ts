import axios, { AxiosError } from 'axios'
import { FORUM_API_URL } from '../features/constants'

const getPosts = async () => {
  try {
    const response = await axios.get(`${FORUM_API_URL}posts`)
    return response.data
  } catch (e) {
    return e as AxiosError
  }
}

const sendPost = async (formData: FormData) => {
  try {
    const response = await axios.put(`${FORUM_API_URL}/posts`, {
      data: formData,
    })
    return response.data
  } catch (e) {
    return e as AxiosError
  }
}

const sendLike = async (id: number) => {
  try {
    await axios.post(`${FORUM_API_URL}/comments/${id}/like`)

    return id
  } catch (e) {
    return e as AxiosError
  }
}

const sendDislike = async (id: number) => {
  try {
    await axios.post(`${FORUM_API_URL}/comments/${id}/dislike`)

    return id
  } catch (e) {
    return e as AxiosError
  }
}

const getMessages = async (id: number) => {
  try {
    const response = await axios.get(`${FORUM_API_URL}/posts/${id}`)

    return response.data
  } catch (e) {
    return e as AxiosError
  }
}

const sendMessage = async ({
  text,
  topicId,
}: {
  text: string
  topicId: number
}) => {
  try {
    const response = await axios.post(`${FORUM_API_URL}/comments`, {
      data: {
        body: text,
        topicId,
      },
    })

    return response.data
  } catch (e) {
    return e as AxiosError
  }
}

export const ForumApi = {
  getPosts,
  sendPost,
  sendLike,
  sendDislike,
  getMessages,
  sendMessage,
}
