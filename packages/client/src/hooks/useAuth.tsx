import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { UserState } from '../store/reducers/userSlice'

export interface IFormData {
  name: string
  password: string
}

export function useAuth(formData: IFormData) {
  const [user, setUser] = useState<UserState>({
    isLoading: false,
    isAuth: false,
    error: null,
    user: {
      id: null,
      firstName: '',
      secondName: '',
      displayName: '',
      login: '',
      email: '',
      phone: '',
      avatar: '',
    },
  })
  const [error, setError] = useState<string | null>(null)

  async function fetchUser() {
    try {
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
