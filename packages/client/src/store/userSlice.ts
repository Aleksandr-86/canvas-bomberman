import { createSlice } from '@reduxjs/toolkit'

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
})

export const { setAuthTrue, setAuthFalse, toggleAuth } = userSlice.actions
export const userReducer = userSlice.reducer
