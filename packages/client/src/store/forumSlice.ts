import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"

export const getPosts = createAsyncThunk(
  'forum/getPosts',
  async () => {
    try {
      const response = await axios.get('https://alt-f4-bomberman-21.ya-praktikum.tech/posts')
      return response.data
    } catch (e) {
      return e as AxiosError
    }
  }
)

export const sendPost = createAsyncThunk(
  'users/sendPost',
  async (formData: FormData) => {
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
)

export const getMessages = createAsyncThunk(
  'forum/getMessages',
  async (id) => {
    try {
      const response = await axios.get(`https://alt-f4-bomberman-21.ya-praktikum.tech/posts/${id}`)
      return response.data
    } catch (e) {
      return e as AxiosError
    }
  }
)

export const sendMessage = createAsyncThunk(
  'users/sendMessage',
  async (formData: FormData) => {
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
)
export const FORUM_DATA = {
  headers: ['Автор', 'Тема', 'Дата'],
  rows: [
    {
      id: 1,
      author: 'Kan88',
      body: 'Как пройти первый уровень',
      date: '8.01.22',
    },
    {
      id: 2,
      author: 'sasha85',
      body: 'Как создать новую тему',
      date: '8.01.22',
    },
  ],
}
const FORUM_MESSAGES = {
  headers: ['Автор', 'Сообщения', 'Дата'],
  rows: [
    {
      id: 1,
      postid: 1,
      author: 'Kan88',
      body: 'Как пройти первый уровень',
      date: '8.01.22',
    },
    {
      id: 2,
      postid: 1,
      author: 'sasha85',
      body: 'Я прошел на изи, надо лишь быстро двигать пальцами',
      date: '8.01.22',
    },
    {
      id: 3,
      postid: 2,
      author: 'Kan88',
      body: 'Подскажите пожалуйста как пройти второй уровень',
      date: '8.01.22',
    },
    {
      id: 4,
      postid: 2,
      author: 'sasha85',
      body: 'Я еще не прошел',
      date: '8.01.22',
    },
  ],
}

const initialState = {
  posts: FORUM_DATA,
  messages: FORUM_MESSAGES,
  error: null as unknown | null | string
}


const forumSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.error = null
    })
    builder.addCase(sendPost.pending, (state) => {
      state.error = null
    })
    builder.addCase(getMessages.pending, (state) => {
      state.error = null
    })
    builder.addCase(sendMessage.pending, (state) => {
      state.error = null
    })
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = {...action.payload}
    })
    builder.addCase(sendPost.fulfilled, (state, action) => {
      state.posts.rows.push(action.payload)
    })
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = {...action.payload}
    })
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.messages.rows.push(action.payload)
    })
    builder.addCase(getPosts.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(sendPost.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(getMessages.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.error = action.payload
    })
  },
})


export const forumReducer = forumSlice.reducer
