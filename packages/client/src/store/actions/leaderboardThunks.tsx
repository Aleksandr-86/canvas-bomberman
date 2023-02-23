import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { axiosErrorHandler } from '../../features/api/axiosErrorHandler'
import { PlayerStats } from '../reducers/leaderboardSlice'
import { LeaderboardAPI, LeadersRequest } from '../../api/leaderboard'
import AuthAPI from '../../api/auth'

export const sendLeaderStats = createAsyncThunk(
  'leaderboard/send',
  async (score: number, { rejectWithValue }) => {
    try {
      const params: LeadersRequest = {
        ratingFieldName: 'score',
        cursor: 0,
        limit: 50,
      }

      const userInfo = await AuthAPI.me()
      const id = userInfo.id
      const name = userInfo.login
      const leaderboardStats = await LeaderboardAPI.getTeamLeaderboard(params)

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
    const params: LeadersRequest = {
      ratingFieldName: 'score',
      cursor: 0,
      limit: 50,
    }

    try {
      const response = await LeaderboardAPI.getTeamLeaderboard(params)

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
