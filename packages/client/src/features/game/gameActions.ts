import { store } from '../../store'
import {
  playerMoved,
  playerReset,
  scoreIncreased,
  bombSet,
  gameStarted,
} from '../../store/gameSlice'
import { isPassable } from './isPassable'
import { Vec2 } from './utils'
import { selectField, selectPlayerPosition } from '../../store/selectors'

export const getPlayer = () => selectPlayerPosition(store.getState())
export const getField = () => selectField(store.getState())

let cooldown = false

export const move = async (direction: Vec2) => {
  if (cooldown) return

  const newCoord = Vec2.add(getPlayer(), direction)

  if (isPassable(getField(), newCoord)) {
    store.dispatch(playerMoved(newCoord))
    store.dispatch(scoreIncreased(300))
    cooldown = true
    setTimeout(() => (cooldown = false), 300)
  }

  return newCoord
}

export function reset() {
  store.dispatch(playerReset())
}

export function placeBomb() {
  store.dispatch(bombSet(getPlayer()))
}

export function startGame() {
  store.dispatch(gameStarted())
}
