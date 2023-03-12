import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  getCurrentTheme,
  sendCurrentTheme,
  updateCurrentTheme,
} from './themeActions'

export enum Theme {
  LIGHT = `light`,
  DARK = `dark`,
}

interface ThemeState {
  isLoading: boolean
  error: null | string | unknown
  current: Theme
}

const INITIAL_STATE: ThemeState = {
  isLoading: false,
  error: null,
  current: Theme.LIGHT,
}

const themeSlice = createSlice({
  name: `theme`,
  initialState: INITIAL_STATE,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.current = action.payload
    },
  },
  extraReducers: builder => {
    builder
      //getCurrentTheme
      .addCase(getCurrentTheme.pending, state => {
        state.isLoading = true
      })
      .addCase(getCurrentTheme.fulfilled, (state, action) => {
        state.isLoading = false
        state.current = action.payload
      })
      // sendCurrentTheme
      .addCase(sendCurrentTheme.pending, state => {
        state.isLoading = true
      })
      .addCase(sendCurrentTheme.fulfilled, (state, action) => {
        state.isLoading = false
        state.current = action.payload
      })
      // updateCurrentTheme
      .addCase(updateCurrentTheme.pending, state => {
        state.isLoading = true
      })
      .addCase(updateCurrentTheme.fulfilled, (state, action) => {
        state.isLoading = false
        state.current = action.payload
      })
  },
})

export const themeReducer = themeSlice.reducer
export const { setTheme } = themeSlice.actions
