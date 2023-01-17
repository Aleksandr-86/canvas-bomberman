import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userSlice'
import { playersStatsReducer } from './playersStatsSlice'

export const store = configureStore({
  reducer: { user: userReducer, playersStats: playersStatsReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
