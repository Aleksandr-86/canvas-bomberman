import { CELL_WIDTH, EMPTY_FIELD_1D, GRID_HEIGHT, GRID_WIDTH } from './const'
import { Sprite } from './lib/gameObjects'
import { type SceneConfig } from './lib'
import { Kind } from './types'

import hero from '../../assets/images/hero.png'
import nesBomberman from '../../assets/images/nesBomberman3x.png'
import nesBombermanFrames from '../../assets/images/nesBomberman3x.json'

const atlasToFrames = ({ cellSize, entries }: typeof nesBombermanFrames) => {
  return Object.fromEntries(
    Object.entries(entries).map(([key, { x, y }]) => [
      key,
      {
        x: x * cellSize,
        y: y * cellSize,
        width: cellSize,
        height: cellSize,
      },
    ])
  )
}

let player: Sprite

export const bombermanScene: SceneConfig = {
  preload: load => {
    load.image('hero', hero)
    load.image('nesBomberman', nesBomberman, texture => {
      const frames = atlasToFrames(nesBombermanFrames)

      texture.addFrame(frames)
    })
  },
  create: scene => {
    player = scene.add.sprite(20, 20, 'nesBomberman', 'bombermanDown2')
    player.scaleX = 80 / 48
    player.scaleY = 80 / 48

    scene.add.tileGrid({
      grid: EMPTY_FIELD_1D,
      cellSize: CELL_WIDTH,
      gridWidth: GRID_WIDTH,
      cells: {
        [Kind.Empty]: 'nesBomberman:empty',
        [Kind.WallHard]: 'nesBomberman:wallHard',
        [Kind.WallSoft]: 'nesBomberman:wallSoft',
      },
    })
    const bomb = scene.add.sprite(80, 80, 'nesBomberman', 'bomb1')
    bomb.width = 80
    bomb.height = 80
    bomb.z = -1
  },
  update: (scene, frame, kbd) => {
    if (kbd.left) player.x -= 300 * frame.delta
    if (kbd.right) player.x += 300 * frame.delta
    if (kbd.up) player.y -= 300 * frame.delta
    if (kbd.down) player.y += 300 * frame.delta
  },
}
