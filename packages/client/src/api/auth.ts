import axios, { AxiosError, isAxiosError } from 'axios'
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

class AuthAPI {
  public login = async (data: LoginRequestData) => {
    const response = await axios.post(API_URL + 'auth/signin', data, {
      ...options,
    })

    return response.data
  }

  public register = async (data: RegisterRequestData) => {
    const response = await axios.post(API_URL + 'auth/signup', data, {
      ...options,
    })

    return response.data
  }

  public me = async () => {
    const response = await axios.get<UserDTO>(API_URL + 'auth/user', {
      ...options,
    })

    return transformUser(response.data)
  }

  public logout = async () => {
    const response = await axios(API_URL + 'auth/logout', {
      method: 'post',
      withCredentials: true,
      headers: {
        'content-type': 'application/json',
      },
    })

    return response.data
  }
}

export default new AuthAPI()
