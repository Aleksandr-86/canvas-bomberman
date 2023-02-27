import { TEAM_NAME } from './../constants'
import { API_URL, UserDTO } from '../../typings/api'
import defaultAvatar from '../../assets/images/avatar.png'
import { PlayerStats } from '../../store/leadeboard/leaderboardSlice'

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
  if (arrayDTO.length === 0) {
    return [
      {
        id: 0,
        place: 0,
        name: `Команда "${TEAM_NAME}" не имеет статистики игроков`,
        score: 0,
        games: 0,
      },
    ]
  }

  return arrayDTO
    .filter(
      item =>
        item.data.id && item.data.name && item.data.score && item.data.games
    )
    .map((filteredItem, index) => ({
      id: filteredItem.data.id,
      place: index + 1,
      name: filteredItem.data.name,
      score: filteredItem.data.score,
      games: filteredItem.data.games,
    }))
}
