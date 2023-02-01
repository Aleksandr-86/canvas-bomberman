import { CELL_WIDTH, EMPTY_FIELD_1D, GRID_HEIGHT, GRID_WIDTH } from './const'
import { Sprite } from './lib/gameObjects'
import { type SceneConfig } from './lib'

import hero from '../../assets/images/hero.png'

let player: Sprite
let bomb: Sprite

export const bombermanScene: SceneConfig = {
  preload: load => {
    load.image('hero', hero)
  },
  create: scene => {
    player = scene.add.sprite(20, 20, 'hero')

    // should add fallback texture
    bomb = scene.add.sprite(20, 20, 'wood')

    scene.add.tileGrid({
      grid: EMPTY_FIELD_1D,
      cellSize: CELL_WIDTH,
      width: GRID_WIDTH,
      height: GRID_HEIGHT,
      cells: {
        0: 'red',
        1: 'blue',
      },
    })
  },
  update: (scene, frame, kbd) => {
    if (kbd.left) player.x -= 300 * frame.delta
    if (kbd.right) player.x += 300 * frame.delta
    if (kbd.up) player.y -= 300 * frame.delta
    if (kbd.down) player.y += 300 * frame.delta
  },
}
