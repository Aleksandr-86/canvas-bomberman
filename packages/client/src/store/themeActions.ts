import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { axiosErrorHandler } from '../features/utils/axiosErrorHandler'
import ThemeAPI from '../api/theme'
import { Theme } from './themeSlice'
import { THEME_LOCAL_STORAGE_KEY } from '../features/constants'

interface UpdateThemeData {
  id: number | null
  theme: Theme
}

export const getCurrentTheme = createAsyncThunk(
  `theme/getCurrentTheme`,
  async (id: number, { dispatch, rejectWithValue }) => {
    try {
      const {
        data: { theme },
      } = await ThemeAPI.getCurrentTheme(id)

      const localTheme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)

      if (localTheme && localTheme !== theme) {
        const {
          data: { theme },
        } = await ThemeAPI.updateCurrentTheme({
          id,
          theme: localTheme as Theme,
        })
        document.documentElement.dataset.theme = theme

        return theme
      }

      document.documentElement.dataset.theme = theme

      return theme
    } catch (error: unknown | AxiosError) {
      const theme = localStorage.getItem(THEME_LOCAL_STORAGE_KEY)

      if (theme) {
        dispatch(sendCurrentTheme({ id, theme: theme as Theme }))
      }
    }
  }
)

export const sendCurrentTheme = createAsyncThunk(
  `theme/sendCurrentTheme`,
  async ({ id, theme }: { id: number; theme: Theme }, { rejectWithValue }) => {
    try {
      const {
        data: { theme: updatedTheme },
      } = await ThemeAPI.sendCurrentTheme({ id, theme })
      document.documentElement.dataset.theme = updatedTheme

      return updatedTheme
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const updateCurrentTheme = createAsyncThunk(
  `theme/updateCurrentTheme`,
  async ({ id, theme }: UpdateThemeData, { rejectWithValue }) => {
    try {
      if (id) {
        const {
          data: { theme: updatedTheme },
        } = await ThemeAPI.updateCurrentTheme({
          id,
          theme,
        })

        document.documentElement.dataset.theme = updatedTheme
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, updatedTheme)

        return updatedTheme
      } else {
        document.documentElement.dataset.theme = theme
        localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme)

        return theme
      }
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)
