import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, isAxiosError } from 'axios'
import { axiosErrorHandler } from '../../features/api/axiosErrorHandler'
import { PlayerStats } from '../reducers/leaderboardSlice'
import { LeaderboardAPI, LeadersRequest } from '../../api/leaderboard'

export const sendLeaderStats = createAsyncThunk(
  'leaderboard/send',
  async (data: PlayerStats, { rejectWithValue }) => {
    try {
      const response = await LeaderboardAPI.sendLeaderboardNewLeaderRequest(
        data
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

      return response.data
    } catch (error: unknown | AxiosError) {
      if (isAxiosError(error)) {
        return rejectWithValue(axiosErrorHandler(error))
      }

      return rejectWithValue(error)
    }
  }
)

export const leaderboardThunks = { sendLeaderStats, setLeadersStatsState }
