import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { axiosErrorHandler } from '../features/utils/axiosErrorHandler'
import ThemeAPI from '../api/theme'
import { setTheme, Theme } from './themeSlice'

interface UpdateThemeData {
  id: number | null
  theme: Theme
}

export const updateCurrentTheme = createAsyncThunk(
  `theme/updateCurrentTheme`,
  async ({ id, theme }: UpdateThemeData, { dispatch, rejectWithValue }) => {
    try {
      if (id) {
        const { data: updatedTheme } = await ThemeAPI.updateCurrentTheme({
          id,
          theme,
        })

        dispatch(setTheme(updatedTheme))
        document.documentElement.dataset.theme = updatedTheme
        localStorage.setItem(`theme`, updatedTheme)
      } else {
        dispatch(setTheme(theme))
        document.documentElement.dataset.theme = theme
        localStorage.setItem(`theme`, theme)
      }
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)
