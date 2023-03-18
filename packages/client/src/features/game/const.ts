// prettier-ignore
// export const GRID_WIDTH = 19
// export const GRID_HEIGHT = 13

export const GRID_WIDTH = 31
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

/* --- Timings --- */
export const PLAYER_ANIMATION_DURATION = 450
export const EXPLOSION_DURATION = 600
export const ENEMY_ANIMATION_DURATION = PLAYER_ANIMATION_DURATION
export const BOMB_FUSE = 3000
export const GAME_DURATION = 200
export const BOMB_PLACEMENT_COOLDOWN = 200

/* --- Velocity --- */
export const PLAYER_VELOCITY = CELL_WIDTH * 2.65
export const BASIC_ENEMY_VELOCITY = CELL_WIDTH * 3

/* --- Chance --- */
export const BUFF_CHANCE = 100
export const WALL_GENERATION_CHANCE = 30

/**
 * Ключевые параметры выбора случайного значения,
 * определяющего количество клеток которые должен пройти
 * противник, прежде чем его направление движения
 * может измениться.
 */
// Нижний порог
export const LOWER_BOUND_MILE_AGE = 2
// Верхний порог
export const UPPER_BOUND_MILE_AGE = 20

/**
 * Шанс изменения направления движения противника
 * с горизонтального на вертикальное (и наоборот).
 */
export const CHANGE_DIR_POSSIBILITY_CHANCE = 55
export const U_TURN_CHANCE = 15 // Шанс разворота противника

/* --- Stats --- */
export const EXPLOSION_RADIUS = 1
export const MAX_ENEMY_COUNT = 10

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
  Enemy = 6,
  Destructable = 7,
  Player = 8,
}
