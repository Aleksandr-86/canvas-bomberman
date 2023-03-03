import { createAsyncThunk } from '@reduxjs/toolkit'
import UserAPI from '../api/user'
import AuthAPI from '../api/auth'
import { AxiosError, isAxiosError } from 'axios'
import { axiosErrorHandler } from '../features/utils/axiosErrorHandler'

type UserDataChangePayload = {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar?: any
}

type PasswordChangePayload = {
  oldpassword: string
  newpassword: string
}

interface LoginPayload {
  login: string
  password: string
}

interface OAuthPayload {
  code: string
  redirect_uri: string
}

interface RegisterPayload {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export const editData = createAsyncThunk(
  'user/editData',
  async (data: UserDataChangePayload, { rejectWithValue }) => {
    try {
      const response = await UserAPI.editData(data)

      return response
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const editPassword = createAsyncThunk(
  'user/editPassword',
  async (data: PasswordChangePayload, { rejectWithValue }) => {
    try {
      const response = await UserAPI.editPassword(data)

      return response
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const uploadAvatar = createAsyncThunk(
  'user/uploadAvatar',
  async (data: FormData, { rejectWithValue }) => {
    try {
      const response = await UserAPI.uploadAvatar(data)

      return response.avatar
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const login = createAsyncThunk(
  'user/login',
  async (data: LoginPayload, { dispatch, rejectWithValue }) => {
    try {
      await AuthAPI.login(data)
      await dispatch(me())
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/register',
  async (data: RegisterPayload, { dispatch, rejectWithValue }) => {
    try {
      await AuthAPI.register(data)
      await dispatch(me())
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const me = createAsyncThunk(
  'user/me',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await AuthAPI.me()

      return response
    } catch (error: unknown | AxiosError) {
      dispatch(logout())

      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthAPI.logout()

      return response
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const oauth = createAsyncThunk(
  'user/oauth',
  async (data: OAuthPayload, { dispatch, rejectWithValue }) => {
    try {
      await AuthAPI.oauth(data)
      dispatch(me())
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)
