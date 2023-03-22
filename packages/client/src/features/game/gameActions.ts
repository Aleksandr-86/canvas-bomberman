import { leaderboardThunks } from './../../store/leaderboardThunks'
import { store } from '../../store'
import {
  setStatus,
  GameStatus,
  scoreIncreased,
  scoreClear,
  incrementTime,
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

export function updateTimer() {
  store.dispatch(incrementTime())
}

export function gameEnded() {
  store.dispatch(setStatus(GameStatus.END))
}
