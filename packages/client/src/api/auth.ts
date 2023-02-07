import axios from 'axios'
import { transformUser } from '../features/api/apiTransformers'
import { API_URL, UserDTO } from '../typings/api'

interface LoginRequestData {
  login: string
  password: string
}

interface RegisterRequestData {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

const options = {
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
}

const login = async (data: LoginRequestData) => {
  const response = await axios.post(API_URL + 'auth/signin', data, {
    ...options,
  })

  return response.data
}

const register = async (data: RegisterRequestData) => {
  const response = await axios.post(API_URL + 'auth/signup', data, {
    ...options,
  })

  return response.data
}

const me = async () => {
  const response = await axios.get<UserDTO>(API_URL + 'auth/user', {
    ...options,
  })

  return transformUser(response.data)
}

const logout = async () => {
  const response = await axios.post(API_URL + 'auth/logout', undefined, {
    ...options,
  })

  return response.data
}

const AuthAPI = {
  login,
  logout,
  me,
  register,
}

export default AuthAPI
