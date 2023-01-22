import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useAuth } from '../hooks/useAuth'
import { IFormData } from '../hooks/useAuth'
import { UserState } from './userSlice'

export const getAuth = createAsyncThunk(
  'user/getAuth',
  async (FormData: IFormData) => useAuth(FormData)
)

const state: UserState = {
  isLoading: false,
  isAuth: false,
  id: false,
  error: false,
  firstName: '',
  secondName: '',
  displayName: 'Алекс',
  login: '',
  email: '',
  phone: '',
}

const authSlice = createSlice({
  name: 'user',
  initialState: state,
  reducers: {},
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getAuth.pending, state => {
        state.error = false
        state.isAuth = false
        state.isLoading = true
      })
      .addCase(getAuth.fulfilled, (state, action) => {
        const { user } = action.payload
        state.isLoading = false
        state.isAuth = user.isAuth
        if (user.isAuth) {
          state.id = user.id
          state.firstName = user.firstName
          state.secondName = user.secondName
          state.displayName = user.displayName
          state.login = user.login
          state.email = user.email
          state.phone = user.phone
        }
      })
      .addCase(getAuth.rejected, state => {
        state.isLoading = false
        state.isAuth = false
        state.error = true
      })
  },
})

const { reducer } = authSlice
export const authReducer = reducer
