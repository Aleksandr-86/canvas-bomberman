import { leaderboardThunks } from './../../store/leaderboardThunks'
import { store } from '../../store'
import {
  setStatus,
  GameStatus,
  scoreIncreased,
  scoreClear,
  setProgress,
  incrementBuff,
  resetBuffs,
} from '../../store/gameSlice'

export function gameStarted() {
  store.dispatch(setStatus(GameStatus.IN_PROGRESS))
}

export function pointsAdded(points: number) {
  store.dispatch(scoreIncreased(points))
}

export function pointsClear() {
  store.dispatch(scoreClear())
}

export function sendScore(score: number) {
  store.dispatch(leaderboardThunks.sendLeaderStats(score))
}

export function inProgress(status: boolean) {
  store.dispatch(setProgress(status))
}

export function increaseBuff(buff: string) {
  store.dispatch(incrementBuff(buff))
}

export function clearBuffs() {
  store.dispatch(resetBuffs())
}

export function gameEnded() {
  store.dispatch(setStatus(GameStatus.END))
}
