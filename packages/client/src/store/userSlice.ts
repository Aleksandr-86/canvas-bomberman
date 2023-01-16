import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  isAuth: boolean
  firstName: string
  secondName: string
  displayName: string
  login: string
  email: string
  phone: string
}

const initialState: UserState = {
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
  initialState,
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
export default userSlice.reducer
