import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userSlice'
import { forumReducer } from './forumSlice'
import { playersStatsReducer } from './playersStatsSlice'
import { gameReducer } from './gameSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    playersStats: playersStatsReducer,
    game: gameReducer,
    forum: forumReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
