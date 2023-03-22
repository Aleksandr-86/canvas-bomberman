import axios from 'axios'
import { OAUTH_REDIRECT_URI, OAUTH_URL } from '../constants'

export const onOauthRequest = async () => {
  const {
    data: { service_id },
  } = await axios.get(
    `${OAUTH_URL}/service-id?redirect_uri=${OAUTH_REDIRECT_URI}`
  )

  window.location.replace(
    `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${OAUTH_REDIRECT_URI}`
  )
}
