export type APIError = {
  reason: string
}

export type ResponseData<T> = Promise<T> | APIError

export type UserDTO = {
  id: number
  login: string
  first_name: string
  second_name: string
  display_name: string
  avatar: string
  phone: string
  email: string
}

export const API_URL = 'https://ya-praktikum.tech/api/v2/'
