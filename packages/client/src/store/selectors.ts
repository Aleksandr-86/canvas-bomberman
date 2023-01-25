import { RootState } from './index'

export const getUser = (state: RootState) => state.user
export const getPlayersStats = (state: RootState) => state.playersStats
export const getCurrentScore = (state: RootState) => state.game.currentScore
export const getGameStatus = (state: RootState) => state.game.status
export const selectPlayerPosition = (state: RootState) =>
  state.game.playerPosition
export const selectField = (state: RootState) => state.game.field
export const selectBombs = (state: RootState) => state.game.bombs
export const selectTime = (state: RootState) => state.game.time
