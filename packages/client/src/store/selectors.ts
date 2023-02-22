import { RootState } from './index'

export const getUser = (state: RootState) => state.user
export const getLeaderboardState = (state: RootState) => {
  return state.leaderboard.stats.slice(
    state.leaderboard.page * 5,
    state.leaderboard.page * 5 + 5
  )
}
export const isLeaderboardLoading = (state: RootState) =>
  state.leaderboard.isLoading
export const getCurrentScore = (state: RootState) => state.game.currentScore
export const getGameStatus = (state: RootState) => state.game.status
