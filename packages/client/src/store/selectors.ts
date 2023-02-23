import { RootState } from './index'

export const getUser = (state: RootState) => state.user
export const getPlayersStats = (state: RootState) => state.playersStats
export const getGameStatus = (state: RootState) => state.game.status
export const getCurrentScore = (state: RootState) => state.game.currentScore

export const selectGameStats = (store: RootState) => {
  return {
    score: store.game.currentScore,
    timeLeft: Math.trunc(store.game.time),
  }
}
