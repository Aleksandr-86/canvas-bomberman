import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { useAuth } from '../hooks/useAuth'
import { IFormData } from '../hooks/useAuth'

export const getAuth = createAsyncThunk(
  'user/getAuth',
  async (FormData: IFormData) => useAuth(FormData)
)

export interface UserState {
  isLoading: boolean
  isAuth: boolean
  error?: null | string | unknown
  id?: number | null
  firstName?: string
  secondName?: string
  displayName?: string
  login?: string
  email?: string
  phone?: string
}

const INITIAL_STATE: UserState = {
  error: null,
  id: null,
  isLoading: false,
  isAuth: true,
  firstName: '',
  secondName: '',
  displayName: 'Алекс',
  login: '',
  email: '',
  phone: '',
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
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getAuth.pending, state => {
        state.error = null
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
      .addCase(getAuth.rejected, (state, action) => {
        state.isLoading = false
        state.isAuth = false
        state.error = action.payload
      })
  },
})

export const { setAuthTrue, setAuthFalse, toggleAuth } = userSlice.actions
export const userReducer = userSlice.reducer
