import axios, { AxiosError} from "axios"

export const ForumApi = {
  async getPosts() {
    try {
      const response = await axios.get(
        'https://alt-f4-bomberman-21.ya-praktikum.tech/posts'
      )
      return response.data
    } catch (e) {
      return e as AxiosError
    }
  },

  async sendPosts(formData: FormData) {
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
  },
  async sendLike(id: number) {
    try {
      await axios.post('https://alt-f4-bomberman-21.ya-praktikum.tech/likes', {
        data: id,
      })
      return id
    } catch (e) {
      return e as AxiosError
    }
  },

  async sendDislike(id: number) {
    try {
      await axios.post(
        'https://alt-f4-bomberman-21.ya-praktikum.tech/dislikes',
        {
          data: id,
        }
      )
      return id
    } catch (e) {
      return e as AxiosError
    }
  },
  async getMessages(id: string | undefined) {
    try {
      const response = await axios.get(
        `https://alt-f4-bomberman-21.ya-praktikum.tech/posts/${id}`
      )
      return response.data
    } catch (e) {
      return e as AxiosError
    }
  },

  async sendMessage(formData: FormData) {
    try {
      const response = await axios.post(
        `https://alt-f4-bomberman-21.ya-praktikum.tech/posts/`,
        {
          data: formData,
        }
      )
      return response.data
    } catch (e) {
      return e as AxiosError
    }
  }

}
