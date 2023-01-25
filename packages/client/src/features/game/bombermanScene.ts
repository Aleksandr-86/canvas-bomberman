import { CELL_WIDTH } from './const'
import { Sprite } from './lib/gameObjects'
import { type SceneContext, type Scene } from './lib/scene'
import { Textures } from './lib/textures'
import { store } from '../../store'
import { playerReset } from '../../store/gameSlice'
import { Vec2 } from './utils/vec2'
import { AnimatedSprite } from './lib/gameObjects/animatedSprite'
import { placeBomb } from './gameActions'
import { createTiles } from './createTiles'
import { move, getField } from './gameActions'

export const bombermanScene = {
  create: (scene: Scene) => {
    const { x: doorx, y: doory } = store.getState().game.doorPosition

    const door = new Sprite(
      Textures.Blue,
      CELL_WIDTH * doorx,
      CELL_WIDTH * doory,
      CELL_WIDTH,
      CELL_WIDTH,
      2
    )

    const player = new Sprite(
      Textures.Blue,
      CELL_WIDTH,
      CELL_WIDTH,
      CELL_WIDTH,
      CELL_WIDTH,
      2,
      'player'
    )

    window.addEventListener('keypress', e => {
      if (e.code === 'KeyR') {
        store.dispatch(playerReset())
      }
    })

    store.subscribe(() => {
      const { doorPosition, playerPosition } = store.getState().game

      if (Vec2.equals(doorPosition, playerPosition)) {
        console.log('you won')
      }
      const { x, y } = Vec2.mul(playerPosition, CELL_WIDTH)

      scene.clear()
      const map = createTiles(getField())
      map.forEach(o => scene.add(o))
      scene.add(door)
      scene.sort()
      scene.add(player)
      console.log(player)

      player.x = x
      player.y = y
      player.width = CELL_WIDTH
      player.height = CELL_WIDTH
    })
  },
  update: ({ kbd }: SceneContext) => {
    if (kbd.left) move(Vec2.Left)
    if (kbd.right) move(Vec2.Right)
    if (kbd.up) move(Vec2.Up)
    if (kbd.down) move(Vec2.Down)

    if (kbd.space) placeBomb()
  },
}
