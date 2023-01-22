import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userSlice'
import { playersStatsReducer } from './playersStatsSlice'
import { gameReducer } from './gameSlice'
import { authReducer } from './authSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    playersStats: playersStatsReducer,
    game: gameReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
