import { AxiosError } from 'axios'
import { APIError } from '../../typings/api'

export const axiosErrorHandler = (error: AxiosError<APIError>) => {
  const { request, response } = error

  if (response) {
    return { reason: response.data.reason, status: response.status }
  } else if (request) {
    return 'server time out'
  } else {
    return 'bad setting up request'
  }
}
