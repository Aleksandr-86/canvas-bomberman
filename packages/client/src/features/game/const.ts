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

export const CAMERA_WIDTH = 1280
export const CAMERA_HEIGHT = 720

/* --- Positions --- */
export const CELL_DIMENSIONS = { x: CELL_WIDTH, y: CELL_WIDTH }
export const PLAYER_STARTING_POSITION = { x: CELL_WIDTH * 1, y: CELL_WIDTH * 1 }
export const ENEMY_SPAWN_OFFSET = {
  x: CELL_DIMENSIONS.x * 3,
  y: CELL_DIMENSIONS.y * 3,
}
export const SOFT_WALL_SPAWN_OFFSET = {
  x: CELL_WIDTH * 1,
  y: CELL_WIDTH * 1,
}

/* --- Animations --- */
export const PLAYER_ANIMATION_DURATION = 450
export const EXPLOSION_DURATION = 600
export const ENEMY_ANIMATION_DURATION = PLAYER_ANIMATION_DURATION
export const BOMB_FUSE = 3000
export const GAME_DURATION = 200

/* --- Velocity --- */
export const PLAYER_VELOCITY = CELL_WIDTH * 3
export const BASIC_ENEMY_VELOCITY = PLAYER_VELOCITY

/* --- Chance --- */
export const BUFF_CHANCE = 8
export const WALL_GENERATION_CHANCE = 30

/* --- Stats --- */
export const EXPLOSION_RADIUS = 1
export const MAX_ENEMY_COUNT = 7

export const Points = {
  Enemy: {
    Droplet: 200,
    Baloon: 100,
  },
  Time: 1,
  Wall: 20,
  Buff: 50,
}

export enum Depth {
  Ground = 1,
  Door = 2,
  Buff = 4,
  Bomb = 5,
  Player = 6,
  Enemy = 7,
  Destructable = 8,
}
