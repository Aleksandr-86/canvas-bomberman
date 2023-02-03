import { createSlice } from '@reduxjs/toolkit'
import {
  editData,
  editPassword,
  login,
  logout,
  me,
  uploadAvatar,
} from './userActions'

export interface User {
  id: number | null
  firstName: string
  secondName: string
  displayName: string
  login: string
  email: string
  phone: string
  avatar: string
}

export interface UserState {
  isLoading: boolean
  isAuth: boolean
  error: null | string | unknown
  user: User
}

const INITIAL_STATE_USER: User = {
  id: null,
  firstName: '',
  secondName: '',
  displayName: '',
  login: '',
  avatar: '',
  email: '',
  phone: '',
}

const INITIAL_STATE: UserState = {
  error: null,
  isLoading: false,
  isAuth: false,
  user: INITIAL_STATE_USER,
}

const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setAuthTrue(state) {
      state.isAuth = true
    },
    setAuthFalse(state) {
      state.isAuth = false
    },
    toggleAuth(state) {
      state.isAuth = !state.isAuth
    },
  },
  extraReducers: builder => {
    builder
      //editData
      .addCase(editData.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(editData.fulfilled, (state, action) => {
        const user = action.payload

        state.isLoading = false

        if (user) {
          state.user = user
        }
      })
      .addCase(editData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      //editPassword
      .addCase(editPassword.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(editPassword.fulfilled, (state, action) => {
        state.isLoading = false
      })
      .addCase(editPassword.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      //uploadAvatar
      .addCase(uploadAvatar.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        const avatar = action.payload

        state.isLoading = false

        if (avatar) {
          state.user.avatar = avatar
        }
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

      //login
      .addCase(login.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuth = true
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      //me
      .addCase(me.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(me.fulfilled, (state, action) => {
        const user = action.payload

        state.isLoading = false

        if (user) {
          state.isAuth = true
          state.user = user
        }
      })
      .addCase(me.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      //logout
      .addCase(logout.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        const user = action.payload

        state.isLoading = false

        if (user) {
          state.isAuth = false
          state.user = INITIAL_STATE_USER
        }
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { setAuthTrue, setAuthFalse, toggleAuth } = userSlice.actions
export const userReducer = userSlice.reducer
