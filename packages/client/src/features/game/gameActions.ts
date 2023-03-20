import { store } from '../../store'
import {
  setStatus,
  GameStatus,
  timerUpdated,
  scoreIncreased,
  scoreClear,
} from '../../store/gameSlice'

let intervalId: number

export function gameStarted() {
  store.dispatch(setStatus(GameStatus.IN_PROGRESS))
  intervalId = window.setInterval(() => {
    store.dispatch(timerUpdated(1000))
  }, 1000)
}

export function pointsAdded(points: number) {
  store.dispatch(scoreIncreased(points))
}

export function pointsClear() {
  store.dispatch(scoreClear())
}

export function gameEnded() {
  window.clearInterval(intervalId)
  store.dispatch(setStatus(GameStatus.END))
}
