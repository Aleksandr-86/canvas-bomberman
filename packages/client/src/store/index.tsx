import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './user/userSlice'
import { leaderboardReducer } from './leadeboard/leaderboardSlice'
import { gameReducer } from './game/gameSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    leaderboard: leaderboardReducer,
    game: gameReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
