import axios, { AxiosError } from 'axios'
const getPosts = async () => {
  try {
    const response = await axios.get(
      'https://alt-f4-bomberman-21.ya-praktikum.tech/posts'
    )
    return response.data
  } catch (e) {
    return e as AxiosError
  }
}

const sendPost = async (formData: FormData) => {
  try {
    const response = await axios.post(
      'https://alt-f4-bomberman-21.ya-praktikum.tech/posts',
      {
        data: formData,
      }
    )
    return response.data
  } catch (e) {
    return e as AxiosError
  }
}

const sendLike = async (id: number) => {
  try {
    await axios.post('https://alt-f4-bomberman-21.ya-praktikum.tech/likes', {
      data: id,
    })
    return id
  } catch (e) {
    return e as AxiosError
  }
}

const sendDislike = async (id: number) => {
  try {
    await axios.post('https://alt-f4-bomberman-21.ya-praktikum.tech/dislikes', {
      data: id,
    })
    return id
  } catch (e) {
    return e as AxiosError
  }
}

const getMessages = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `https://alt-f4-bomberman-21.ya-praktikum.tech/posts/${id}`
    )
    return response.data
  } catch (e) {
    return e as AxiosError
  }
}

const sendMessage = async (formData: FormData) => {
  try {
    const response = await axios.post(
      `https://alt-f4-bomberman-21.ya-praktikum.tech/message/`,
      {
        data: formData,
      }
    )
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
