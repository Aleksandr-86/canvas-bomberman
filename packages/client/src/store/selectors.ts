import { RootState } from './index'

export const getUser = (state: RootState) => state.user

export const getLeaderboardState = (state: RootState) => {
  return state.leaderboard.stats.slice(
    state.leaderboard.page * 5,
    state.leaderboard.page * 5 + 5
  )
}

export const isFirstPage = (state: RootState) => {
  return state.leaderboard.page === 0 ? true : false
}

export const isLastPage = (state: RootState) => {
  const len = state.leaderboard.stats.length
  const range = (state.leaderboard.page + 1) * 5
  return range < len ? false : true
}

export const isLeaderboardLoading = (state: RootState) => {
  return state.leaderboard.isLoading
}

export const getCurrentScore = (state: RootState) => state.game.currentScore
export const getGameStatus = (state: RootState) => state.game.status
