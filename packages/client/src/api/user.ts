import axios from 'axios'
import { API_URL, UserDTO } from '../typings/api'
import { transformUser } from '../features/api/apiTransformers'

type EditRequestData = {
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
}

type PasswordRequestData = {
  oldpassword: string
  newpassword: string
}

const options = {
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
}

class UserAPI {
  public editData = async (data: EditRequestData) => {
    const response = await axios.put<UserDTO>(API_URL + 'user/profile', data, {
      ...options,
    })

    return transformUser(response.data)
  }

  public editPassword = async (data: PasswordRequestData) => {
    const response = await axios.put(API_URL + 'user/password', data, {
      ...options,
    })

    return response.data
  }

  public uploadAvatar = async (data: FormData) => {
    const response = await axios.put<UserDTO>(
      API_URL + 'user/profile/avatar',
      data,
      {
        ...options,
        headers: {},
      }
    )

    return transformUser(response.data)
  }
}

export default new UserAPI()
