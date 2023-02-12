import axios from 'axios'

export const redirectURI = `http://localhost:3000`
export const OauthURL = `https://ya-praktikum.tech/api/v2/oauth/yandex`

export const onOauthRequest = async () => {
  const {
    data: { service_id },
  } = await axios.get(`https://ya-praktikum.tech/api/v2/oauth/yandex/service-id?redirect_uri=${redirectURI}
                `)

  window.location.replace(
    `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${redirectURI}`
  )
}
