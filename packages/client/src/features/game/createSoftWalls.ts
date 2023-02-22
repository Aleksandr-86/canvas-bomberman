import { GRID_WIDTH, WALL_GENERATION_CHANCE } from './const'
import { type FieldState } from './types'
import { type PointLike } from './utils/point'
import { Kind } from './types'

/**
 * Create array of SoftWall coordinates
 * @param field empty game field
 * @param offset top-left offset from which to start creating walls
 * @returns
 */

export function createSoftWalls(field: FieldState, offset: PointLike) {
  const walls = []

  for (let i = 0; i < field.length; ++i) {
    const cell = field[i]

    if (cell === Kind.Empty) {
      if (Math.random() * 101 < WALL_GENERATION_CHANCE) {
        const x = i % GRID_WIDTH
        const y = Math.trunc(i / GRID_WIDTH)

        // offset from upper left corner
        if (x > offset.x && y > offset.y) {
          walls.push({ x, y })
        }
      }
    }
  }

  return walls
}
