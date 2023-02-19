import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userSlice'
import { playersStatsReducer } from './playersStatsSlice'
import { gameReducer } from './gameSlice'

const initialState: Record<string, unknown> =
  typeof window !== 'undefined'
    ? window.__PRELOADED_STATE__
    : {
        game: {
          status: 'start',
          currentScore: 0,
        },
        playersStats: [],
        user: {
          error: null,
          isAuth: false,
          isLoading: false,
          user: {
            id: null,
            firstName: '',
            secondName: '',
            displayName: '',
            login: '',
            avatar: '',
            email: '',
            phone: '',
          },
        },
      }

export const createStore = (
  preloadedState: Record<string, unknown> | undefined
) => {
  return configureStore({
    reducer: {
      user: userReducer,
      playersStats: playersStatsReducer,
      game: gameReducer,
    },
    preloadedState,
  })
}

export const store = createStore(initialState)

declare global {
  interface Window {
    __PRELOADED_STATE__: RootState
  }
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
