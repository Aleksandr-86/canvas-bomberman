import { store } from '../../store'
import * as StoreGameActions from '../../store/gameSlice'
import { delay } from './utils'
import { BOMB_COOLDOWN, MOVEMENT_COOLDOWN } from './const'
import { selectGameObjects, selectPlayerPosition } from '../../store/selectors'
import { TPoint } from './utils/point'

const buffs = () => store.getState().game.activeBuffs

const cooldownActive = {
  bomb: false,
  movement: false,
}

export async function move(direction: TPoint) {
  if (cooldownActive.movement) return

  cooldownActive.movement = true
  store.dispatch(StoreGameActions.playerMoved(direction))
  const movementCooldown = buffs().playerSpeedUp
    ? MOVEMENT_COOLDOWN.PLAYER / 2
    : MOVEMENT_COOLDOWN.PLAYER

  await delay(movementCooldown)
  cooldownActive.movement = false
}

export function reset() {
  store.dispatch(StoreGameActions.playerReset())
}

export async function placeBomb() {
  if (cooldownActive.bomb) return

  cooldownActive.bomb = true
  store.dispatch(StoreGameActions.bombSet())
  const bombCooldown = buffs().bombAmountUp ? BOMB_COOLDOWN / 2 : BOMB_COOLDOWN

  await delay(bombCooldown)
  cooldownActive.bomb = false
}

export function startGame() {
  store.dispatch(StoreGameActions.gameStarted())
}

export function onStoreUpdate(
  sub: (
    objects: {
      playerPosition: ReturnType<typeof selectPlayerPosition>
    } & ReturnType<typeof selectGameObjects>
  ) => void
) {
  return store.subscribe(() => {
    sub({
      playerPosition: selectPlayerPosition(store.getState()),
      ...selectGameObjects(store.getState()),
    })
  })
}
