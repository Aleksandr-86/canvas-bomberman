import { TEAM_NAME } from './../features/constants'
import axios from 'axios'
import { API_URL } from '../features/constants'
import { PlayerStats } from '../store/reducers/leaderboardSlice'

export type LeadersRequest = {
  ratingFieldName: string
  cursor: number
  limit: number
}

const options = {
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
}

const sendLeaderboardNewLeaderRequest = async (data: PlayerStats) => {
  const requestParams = {
    ratingFieldName: 'score',
    teamName: TEAM_NAME,
  }

  const response = await axios.post<PlayerStats>(
    `${API_URL}/leaderboard`,
    { data: data, ...requestParams },
    { ...options }
  )

  return response
}

const getTeamLeaderboard = async (data: LeadersRequest) => {
  const response = await axios.post(
    `${API_URL}/leaderboard/${TEAM_NAME}`,
    data,
    { ...options }
  )

  return response
}

export const LeaderboardAPI = {
  sendLeaderboardNewLeaderRequest,
  getTeamLeaderboard,
}
