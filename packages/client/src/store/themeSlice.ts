import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum Theme {
  LIGHT = `light`,
  DARK = `dark`,
}

interface ThemeState {
  current: Theme
}

const INITIAL_STATE: ThemeState = {
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
})

export const themeReducer = themeSlice.reducer
export const { setTheme } = themeSlice.actions
