import axios from 'axios'

export const REDIRECT_URI = `http://localhost:3000`
export const OAUTH_URL = `https://ya-praktikum.tech/api/v2/oauth/yandex`

export const onOauthRequest = async () => {
  const {
    data: { service_id },
  } = await axios.get(`${OAUTH_URL}/service-id?redirect_uri=${REDIRECT_URI}`)

  window.location.replace(
    `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${REDIRECT_URI}`
  )
}
