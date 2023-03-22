import { RootState } from './index'
import { LEADERBOARD_LENGTH } from '../features/constants'

export const getUser = (state: RootState) => state.user
export const getGameStatus = (state: RootState) => state.game.status
export const getCurrentScore = (state: RootState) => state.game.currentScore

export const selectGameStats = (store: RootState) => {
  return {
    score: store.game.currentScore,
    inProgress: store.game.inProgress,
  }
}

export const getLeaderboardState = (state: RootState) => {
  return state.leaderboard.stats.slice(
    state.leaderboard.page * LEADERBOARD_LENGTH,
    state.leaderboard.page * LEADERBOARD_LENGTH + LEADERBOARD_LENGTH
  )
}

export const isFirstPage = (state: RootState) => state.leaderboard.page === 0
export const isLastPage = (state: RootState) => {
  const len = state.leaderboard.stats.length
  const range = (state.leaderboard.page + 1) * LEADERBOARD_LENGTH
  return range < len ? false : true
}

export const isLeaderboardLoading = (state: RootState) =>
  state.leaderboard.isLoading

export const getCurrentScore = (state: RootState) => state.game.currentScore
export const getGameStatus = (state: RootState) => state.game.status
export const getTheme = (state: RootState) => state.theme.current
export const getPosts = (state: RootState) => state.forum.posts
export const getMessages = (state: RootState) => state.forum.messages
