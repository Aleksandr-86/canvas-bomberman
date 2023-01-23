import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { UserState } from '../store/userSlice'

export interface IFormData {
  name: string
  password: string
}

export function useAuth(formData: IFormData) {
  const [user, setUser] = useState<UserState>({
    isLoading: false,
    isAuth: false,
  })
  const [error, setError] = useState<string | boolean>(false)

  async function fetchUser() {
    try {
      setError('')
      const response = await axios.post<UserState>(
        'https://alt-f4-bomberman-21.ya-praktikum.tech/user',
        {
          data: formData,
        }
      )
      setUser(response.data)
    } catch (e) {
      const error = e as AxiosError
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return { user, error }
}
