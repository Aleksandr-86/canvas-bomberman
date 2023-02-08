import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './index'

export const getUser = (state: RootState) => state.user
export const getPlayersStats = (state: RootState) => state.playersStats
export const getGameStatus = (state: RootState) => state.game.status
export const getCurrentScore = (state: RootState) => state.game.currentScore
export const selectPlayerPosition = (state: RootState) =>
  state.game.playerPosition
export const selectBombs = (state: RootState) => state.game.bombs
export const selectSoftWalls = (state: RootState) => state.game.softWalls
export const selectBuffs = (state: RootState) => state.game.buffs
export const selectDoor = (state: RootState) => state.game.doorPosition
export const selectGameObjects = createSelector(
  [selectBombs, selectSoftWalls, selectBuffs],
  (bombs, walls, buffs) => {
    return {
      bombs,
      walls,
      buffs,
    }
  }
)

export const selectActiveBuffList = (store: RootState) =>
  Object.entries(store.game.activeBuffs)
    .filter(([_, active]) => active)
    .map(([buff]) => buff)

export const selectGameStats = (store: RootState) => {
  return {
    score: store.game.currentScore,
    timeLeft: Math.trunc(store.game.time),
  }
}
