import axios, { AxiosResponse } from 'axios'
import { PlayerStats } from '../store/playersStatsSlice'
import { TEAM_NAME, API_URL } from '../features/constants'
import { transformLeaderboardDTO } from '../features/utils/apiTransformers'

const options = {
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
}

interface LeaderRequestParams {
  ratingFieldName: string
  teamName: string
}

interface LeaderboardRequestParams {
  ratingFieldName: string
  cursor: number
  limit: number
}

const sendLeaderboardNewLeaderRequest = async (
  data: PlayerStats
): Promise<AxiosResponse<PlayerStats, unknown>> => {
  const requestParams: LeaderRequestParams = {
    ratingFieldName: 'games',
    teamName: TEAM_NAME,
  }

  const response = await axios.post<PlayerStats>(
    `${API_URL}/leaderboard`,
    { data: data, ...requestParams },
    { ...options }
  )

  return response
}

const getTeamLeaderboard = async (): Promise<PlayerStats[]> => {
  const requestParams: LeaderboardRequestParams = {
    ratingFieldName: 'score',
    cursor: 0,
    limit: 50,
  }

  const response = await axios.post(
    `${API_URL}/leaderboard/${TEAM_NAME}`,
    requestParams,
    { ...options }
  )

  return transformLeaderboardDTO(response.data)
}

export const LeaderboardAPI = {
  sendLeaderboardNewLeaderRequest,
  getTeamLeaderboard,
}
