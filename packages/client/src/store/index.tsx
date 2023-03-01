import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userSlice'
import { leaderboardReducer } from './playersStatsSlice'
import { gameReducer } from './gameSlice'
import { themeReducer } from './themeSlice'

const initialState: Record<string, unknown> =
  typeof window !== 'undefined'
    ? window.__PRELOADED_STATE__
    : {
        game: {
          status: 'start',
          currentScore: 0,
        },
        leaderboard: {
          stats: [],
          page: 0,
        },
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
        theme: {
          current: `light`,
        },
      }

export const createStore = (
  preloadedState: Record<string, unknown> | undefined
) => {
  return configureStore({
    reducer: {
      user: userReducer,
      leaderboard: leaderboardReducer,
      game: gameReducer,
      theme: themeReducer,
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
