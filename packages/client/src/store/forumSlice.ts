import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ForumApi } from '../api/forum'

export const getPosts = createAsyncThunk('forum/getPosts', ForumApi.getPosts)

export const sendPost = createAsyncThunk('users/sendPost', ForumApi.sendPosts)

export const sendLike = createAsyncThunk('users/sendLike', ForumApi.sendLike)

export const sendDislike = createAsyncThunk('users/sendDislike',ForumApi.sendDislike)

export const getMessages = createAsyncThunk('forum/getMessages',ForumApi.getMessages)

export const sendMessage = createAsyncThunk('users/sendMessage', ForumApi.sendMessage)

const FORUM_DATA = {
  headers: ['Автор', 'Тема', 'Дата'],
  rows: [
    {
      id: 1,
      author: 'Kan',
      body: 'Как пройти первый уровень',
      date: '8.01.22',
    },
    {
      id: 2,
      author: 'sasha',
      body: 'Как создать новую тему',
      date: '8.01.22',
    },
  ],
  redirect: true,
}
const FORUM_MESSAGES = {
  headers: ['Автор', 'Сообщения', 'Дата', 'Лайки', 'Дизлайки'],
  rows: [
    {
      id: 1,
      postid: 1,
      author: 'Kan88',
      body: 'Как пройти первый уровень',
      date: '8.01.22',
      likes: 150,
      dislikes: 12,
    },
    {
      id: 2,
      postid: 1,
      author: 'sasha85',
      body: 'Я прошел на изи, надо лишь быстро двигать пальцами',
      date: '8.01.22',
      likes: 2,
      dislikes: 12,
    },
  ],
}

const initialState = {
  posts: FORUM_DATA,
  messages: FORUM_MESSAGES,
  error: null as unknown | null | string,
}

const forumSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    builder.addCase(getPosts.pending, state => {
      state.error = null
    })
    builder.addCase(sendPost.pending, state => {
      state.error = null
    })
    builder.addCase(sendLike.pending, state => {
      state.error = null
    })
    builder.addCase(sendDislike.pending, state => {
      state.error = null
    })
    builder.addCase(getMessages.pending, state => {
      state.error = null
    })
    builder.addCase(sendMessage.pending, state => {
      state.error = null
    })
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = { ...action.payload }
    })
    builder.addCase(sendPost.fulfilled, (state, action) => {
      state.posts.rows.push(action.payload)
    })
    builder.addCase(sendLike.fulfilled, (state, action) => {
      state.messages.rows.map(item => {
        if (item.id === action.payload) {
          item.likes++
        }
      })
    })
    builder.addCase(sendDislike.fulfilled, (state, action) => {
      state.messages.rows.map(item => {
        if (item.id === action.payload) {
          item.dislikes++
        }
      })
    })
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messages = { ...action.payload }
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
    builder.addCase(sendLike.rejected, (state, action) => {
      state.error = action.payload
    })
    builder.addCase(sendDislike.rejected, (state, action) => {
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
