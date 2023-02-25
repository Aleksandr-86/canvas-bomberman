import axios from 'axios'
import { PlayerStats } from '../store/leadeboard/leaderboardSlice'
import { TEAM_NAME, API_URL } from '../features/constants'
import { transformLeaderboardDTO } from '../features/utils/apiTransformers'

const options = {
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
}

const sendLeaderboardNewLeaderRequest = async (data: PlayerStats) => {
  const response = await axios.post<PlayerStats>(
    `${API_URL}/leaderboard`,
    { data: data, ratingFieldName: 'games', teamName: TEAM_NAME },
    { ...options }
  )

  return response
}

const getTeamLeaderboard = async () => {
  const response = await axios.post(
    `${API_URL}/leaderboard/${TEAM_NAME}`,
    { ratingFieldName: 'score', cursor: 0, limit: 50 },
    { ...options }
  )

  return transformLeaderboardDTO(response.data)
}

export const LeaderboardAPI = {
  sendLeaderboardNewLeaderRequest,
  getTeamLeaderboard,
}
