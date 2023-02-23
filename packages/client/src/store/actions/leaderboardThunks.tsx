import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { axiosErrorHandler } from '../../features/utils/axiosErrorHandler'
import { PlayerStats } from '../reducers/leaderboardSlice'
import { LeaderboardAPI } from '../../api/leaderboardAPI'
import AuthAPI from '../../api/authAPI'

export const sendLeaderStats = createAsyncThunk(
  'leaderboard/send',
  async (score: number, { rejectWithValue }) => {
    try {
      const userInfo = await AuthAPI.me()
      const id = userInfo.id
      const name = userInfo.login
      const leaderboardStats = await LeaderboardAPI.getTeamLeaderboard()

      const playerStats: PlayerStats = {
        id: id,
        name: name,
        score: score,
        games: 1,
      }

      for (const value of leaderboardStats.values()) {
        if (value.id === id) {
          if (score < value.score) {
            playerStats.score = value.score
          }

          playerStats.games += value.games
          const response = await LeaderboardAPI.sendLeaderboardNewLeaderRequest(
            playerStats
          )

          return response.status
        }
      }

      const response = await LeaderboardAPI.sendLeaderboardNewLeaderRequest(
        playerStats
      )

      return response.status
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const setLeadersStatsState = createAsyncThunk(
  'leaderboard/set',
  async (_, { rejectWithValue }) => {
    try {
      const response = await LeaderboardAPI.getTeamLeaderboard()

      return response
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const leaderboardThunks = { sendLeaderStats, setLeadersStatsState }
