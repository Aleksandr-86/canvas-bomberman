import { API_URL, UserDTO } from '../../typings/api'
import defaultAvatar from '../../assets/images/avatar.png'

interface UserForm {
  login: string
  firstName: string
  secondName: string
  password: string
  phone: string
  email: string
}

export const transformUser = (data: UserDTO) => {
  const avatar =
    data.avatar !== null ? `${API_URL}resources${data.avatar}` : defaultAvatar

  return {
    id: data.id,
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    displayName: data.display_name,
    avatar: avatar,
    phone: data.phone,
    email: data.email,
  }
}

export const transformUserDTO = (data: UserForm) => {
  return {
    first_name: data.firstName,
    second_name: data.secondName,
    login: data.login,
    phone: data.phone,
    password: data.password,
    email: data.email,
  }
}
