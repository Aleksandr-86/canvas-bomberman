import axios from 'axios'
import { API_URL_CUSTOM } from '../features/constants'
import { Theme } from '../store/themeSlice'

const options = {
  headers: {
    'content-type': 'application/json',
  },
}

interface SendTheme {
  id: number
  theme: Theme
}

export const getCurrentTheme = async (id: number) => {
  const response = await axios.get(`${API_URL_CUSTOM}/theme/${id}`)

  return response
}

export const sendCurrentTheme = async ({ id, theme }: SendTheme) => {
  const response = await axios.post(
    `${API_URL_CUSTOM}/theme/`,
    {
      user_id: id,
      value: theme,
    },
    { ...options }
  )

  return response
}

export const updateCurrentTheme = async ({ id, theme }: SendTheme) => {
  const response = await axios.put(
    `${API_URL_CUSTOM}/theme/`,
    {
      user_id: id,
      value: theme,
    },
    { ...options }
  )

  return response
}

const ThemeAPI = {
  getCurrentTheme,
  sendCurrentTheme,
  updateCurrentTheme,
}

export default ThemeAPI
