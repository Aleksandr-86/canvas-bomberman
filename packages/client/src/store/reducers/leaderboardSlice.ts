import { transformLeaderboardDTO } from '../../features/utils/apiTransformers'
import { leaderboardThunks } from '../actions/leaderboardThunks'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PlayerStats = {
  id: number
  place?: number
  name: string
  score: number
  games: number
}

interface InitialState {
  isLoading: boolean
  stats: PlayerStats[]
  page: number
}

const INITIAL_STATE: InitialState = {
  isLoading: false,
  stats: [],
  page: 0,
}

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: INITIAL_STATE,
  reducers: {
    setPlayersStats: (
      state: InitialState,
      { payload }: PayloadAction<PlayerStats[]>
    ) => {
      state.stats = payload
    },
    nextPage: (state: InitialState) => {
      if ((state.page + 1) * 5 < state.stats.length) {
        state.page++
      }
    },
    previousPage: (state: InitialState) => {
      if (state.page > 0) {
        state.page--
      }
    },
  },
  extraReducers: builder => {
    builder
      /**
       * Получение статистики игроков с последующим
       * сохранением в хранилище
       */
      .addCase(leaderboardThunks.setLeadersStatsState.pending, state => {
        state.isLoading = true
      })
      .addCase(
        leaderboardThunks.setLeadersStatsState.fulfilled,
        (state, action) => {
          const payload = action.payload

          if (payload) {
            state.stats = payload
          }

          state.isLoading = false
        }
      )
      .addCase(leaderboardThunks.setLeadersStatsState.rejected, state => {
        state.isLoading = false
      })
  },
})

export const { setPlayersStats, nextPage, previousPage } =
  leaderboardSlice.actions
export const leaderboardReducer = leaderboardSlice.reducer
