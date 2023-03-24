export const CLIENT_PORT = 3000
export const SERVER_PORT = 3001

// Базовый url Яндекс Практикума
export const YANDEX_API = 'https://ya-praktikum.tech/api/v2'

// url хоста локального сервера
export const LOCALHOST_API = `http://localhost:${SERVER_PORT}/api`

export const FORUM_API_URL = 'https://alt-f4-bomberman-21.ya-praktikum.tech/api'

// Список клиентских хостов
export const CLIENT_HOSTS = [`localhost`, `127.0.0.1`]

/**
 * Название команды за которой будет закреплена
 * статистка по игрокам.
 */
export const TEAM_NAME = 'alt+f4v2'

/**
 * Количество строк таблицы лидеров отображаемых
 * на одной странице
 *  */
export const LEADERBOARD_LENGTH = 5

export const THEME_LOCAL_STORAGE_KEY = `theme`
// !!! настоящий url хоста, которым нужно пользоваться
export const API_URL = APIHost()

function APIHost() {
  //ToDo: пробросить имя хоста с сервера и от него уже выдавать нужный url

  if (typeof document !== 'undefined') {
    const { hostname, port } = document.location

    if (port && Number(port) !== CLIENT_PORT) {
      if (hostname === '127.0.0.1') {
        return LOCALHOST_API.replace('localhost', '127.0.0.1')
      }
      return LOCALHOST_API
    }

    if (CLIENT_HOSTS.includes(hostname)) {
      return YANDEX_API
    }
  }

  return LOCALHOST_API
}
