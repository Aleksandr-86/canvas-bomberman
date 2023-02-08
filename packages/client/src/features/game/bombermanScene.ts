import { Unsubscribe } from '@reduxjs/toolkit'
import {
  CELL_WIDTH,
  Depth,
  EMPTY_FIELD,
  GRID_WIDTH,
  PLAYER_STARTING_POSITION,
} from './const'
import { Sprite } from './lib/gameObjects'
import { type SceneConfig } from './lib'
import { Kind } from './types'
import { Point } from './utils/point'
import { placeBomb, move, startGame, onStoreUpdate } from './gameActions'
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
let cancel: Unsubscribe

export const bombermanScene: SceneConfig = {
  preload: load => {
    load.image('nesBomberman', nesBomberman, texture => {
      const frames = atlasToFrames(nesBombermanFrames)

      texture.addFrame(frames)
    })
  },
  create: scene => {
    const backgroundTiles = scene.create.tileGrid({
      grid: EMPTY_FIELD,
      cellSize: CELL_WIDTH,
      gridWidth: GRID_WIDTH,
      cells: {
        [Kind.Empty]: 'nesBomberman:empty',
        [Kind.WallHard]: 'nesBomberman:wallHard',
      },
      depth: Depth.Ground,
    })

    player = scene.create.sprite(
      PLAYER_STARTING_POSITION.x * CELL_WIDTH,
      PLAYER_STARTING_POSITION.y * CELL_WIDTH,
      'nesBomberman',
      'bombermanDown1',
      80,
      80
    )
    player.z = Depth.Player

    cancel = onStoreUpdate(({ bombs, walls, buffs, playerPosition }) => {
      const wallSprites = walls.map(({ x, y }) => {
        const wall = scene.create.sprite(
          x * CELL_WIDTH,
          y * CELL_WIDTH,
          'nesBomberman',
          'wallSoft',
          80,
          80
        )
        wall.z = Depth.Destructable
        return wall
      })

      const bombSprites = bombs.map(({ x, y }) => {
        const bomb = scene.create.sprite(
          x * CELL_WIDTH,
          y * CELL_WIDTH,
          'nesBomberman',
          'bomb1',
          80,
          80
        )
        bomb.z = Depth.Bomb
        bomb.opacity = 0.8
        return bomb
      })

      const buffSprites = buffs.map(({ x, y, kind }) => {
        const powerup = scene.create.sprite(
          x * CELL_WIDTH,
          y * CELL_WIDTH,
          'nesBomberman',
          kind,
          80,
          80
        )
        powerup.z = Depth.Destructable
        return powerup
      })

      player.x = playerPosition.x * CELL_WIDTH
      player.y = playerPosition.y * CELL_WIDTH

      // every update displayList recreated by joining static (backgroundTiles) and dynamic (softWalls, bombs, player) parts
      scene.displayList = backgroundTiles
        .concat(player)
        .concat(bombSprites)
        .concat(buffSprites)
        .concat(wallSprites)
    })

    // bind player reference to camera
    scene.camera.bind(player)

    startGame()
  },
  update: (scene, frame, kbd) => {
    if (kbd.left) move(Point.Left)
    if (kbd.right) move(Point.Right)
    if (kbd.up) move(Point.Up)
    if (kbd.down) move(Point.Down)
    if (kbd.space) placeBomb()
  },
}
