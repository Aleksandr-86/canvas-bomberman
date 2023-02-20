import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/userSlice'
import { playersStatsReducer } from './reducers/playersStatsSlice'
import { gameReducer } from './reducers/gameSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    playersStats: playersStatsReducer,
    game: gameReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
