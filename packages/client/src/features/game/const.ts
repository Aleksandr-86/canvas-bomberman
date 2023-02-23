import { FieldState } from './types'

// prettier-ignore
export const EMPTY_FIELD: FieldState = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]
export const GRID_WIDTH = 19
export const GRID_HEIGHT = 13
export const CELL_WIDTH = 80
export const WALL_GENERATION_CHANCE = 40

export const CAMERA_WIDTH = 1280
export const CAMERA_HEIGHT = 720

export const PLAYER_STARTING_POSITION = { x: 1, y: 1 }
export const PLAYER_ANIMATION_DURATION = 600
export const ENEMY_ANIMATION_DURATION = PLAYER_ANIMATION_DURATION
export const PLAYER_VELOCITY = CELL_WIDTH * 2
export const BASIC_ENEMY_VELOCITY = PLAYER_VELOCITY
export const BOMB_COOLDOWN = 2000
export const BOMB_FUSE = 3000
export const EXPLOSION_RADIUS = 1
export const GAME_DURATION = 200
export const BUFF_CHANCE = 8
export const ENEMY_COUNT = 6

export const Points = {
  Enemy: {
    Droplet: 200,
    Baloon: 100,
  },
  Time: 5,
  Wall: 20,
  Buff: 30,
}

export enum Depth {
  Ground = 1,
  Door = 2,
  Bomb = 4,
  Destructable = 5,
  Player = 6,
  Enemy = 7,
}
