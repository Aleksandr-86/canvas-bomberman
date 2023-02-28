import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userSlice'
import { leaderboardReducer } from './playersStatsSlice'
import { gameReducer } from './gameSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    leaderboard: leaderboardReducer,
    game: gameReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
