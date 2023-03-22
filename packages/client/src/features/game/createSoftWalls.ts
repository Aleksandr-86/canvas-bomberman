import { GRID_HEIGHT, GRID_WIDTH, WALL_GENERATION_CHANCE } from './const'
import { type PointLike, withChance } from './utils'
import type { Obstacles } from './bombermanScene'

/**
 * Create array of SoftWall coordinates
 * @param field empty game field
 * @param offset top-left offset from which to start creating walls
 * @returns
 */

export function generateWallSoftPositions(field: Obstacles, offset: PointLike) {
  const walls = []

  for (let x = 0; x < GRID_WIDTH; x++) {
    for (let y = 0; y < GRID_HEIGHT; y++) {
      const endToEndNum = x + y * GRID_WIDTH

      const cell = field[x][y]

      if (cell === null) {
        if (withChance(WALL_GENERATION_CHANCE)) {
          const x = endToEndNum % GRID_WIDTH
          const y = Math.trunc(endToEndNum / GRID_WIDTH)

          // offset from upper left corner
          if (x > offset.x && y > offset.y) {
            walls.push({ x, y })
          }
        }
      }
    }
  }

  return walls
}
