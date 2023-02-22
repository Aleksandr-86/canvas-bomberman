import { API_URL, UserDTO } from '../../typings/api'
import defaultAvatar from '../../assets/images/avatar.png'
import { PlayerStats } from '../../store/reducers/leaderboardSlice'

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

/**
 * Преобразует получаемый с API Яндекса массив объектов
 * в подходящий формат для отображения в таблице лидеров
 */
export const transformLeaderboardDTO = (arrayDTO: { data: PlayerStats }[]) => {
  const transformedData: PlayerStats[] = []
  let place = 1

  if (arrayDTO.length === 0) {
    transformedData.push({
      id: 0,
      place: 0,
      name: 'без имени',
      score: 0,
      games: 0,
    })
  }

  for (let i = 0; i < arrayDTO.length; i++) {
    const data = arrayDTO[i].data

    // Фильтрация объектов не имеющих соответствующих полей
    if (!data.id || !data.name || !data.score || !data.games) {
      continue
    }

    const playerStats = {
      id: data.id,
      place: place,
      name: data.name,
      score: data.score,
      games: data.games,
    }

    place++

    transformedData.push(playerStats)
  }

  return transformedData
}
