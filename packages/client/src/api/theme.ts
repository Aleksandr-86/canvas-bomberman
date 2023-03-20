import axios from 'axios'
import { LOCALHOST_API } from '../features/constants'
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
  const response = await axios.get(`${LOCALHOST_API}/theme/${id}`)

  return response
}

export const sendCurrentTheme = async ({ id, theme }: SendTheme) => {
  const response = await axios.post(
    `${LOCALHOST_API}/theme/`,
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
    `${LOCALHOST_API}/theme/`,
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
