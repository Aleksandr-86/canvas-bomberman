import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/userSlice'
import { leaderboardReducer } from './reducers/leaderboardSlice'
import { gameReducer } from './reducers/gameSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    leaderboard: leaderboardReducer,
    game: gameReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
