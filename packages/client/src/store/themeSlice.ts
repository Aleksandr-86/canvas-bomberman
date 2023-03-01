import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ThemeState {
  current: `light` | `dark`
}

const INITIAL_STATE: ThemeState = {
  current: `light`,
}

const themeSlice = createSlice({
  name: `theme`,
  initialState: INITIAL_STATE,
  reducers: {
    setTheme(state, action: PayloadAction<`light` | `dark`>) {
      state.current = action.payload
    },
  },
})

export const themeReducer = themeSlice.reducer
export const { setTheme } = themeSlice.actions
