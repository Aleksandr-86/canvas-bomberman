import { GRID_WIDTH } from './const'
import { type FieldState } from './types'
import { type TPoint } from './utils/point'
import { Kind } from './types'

export function createSoftWalls(field: FieldState, offset: TPoint) {
  const walls = []

  for (let i = 0; i < field.length; ++i) {
    const cell = field[i]

    if (cell === Kind.Empty) {
      if (Math.random() * 100 < 25) {
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
