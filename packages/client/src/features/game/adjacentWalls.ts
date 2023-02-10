import { EMPTY_FIELD, GRID_WIDTH } from './const'
import { Kind } from './types'
import { type TPoint, Point } from './utils'

export function adjacentWalls(walls: TPoint[], center: TPoint, radius: number) {
  const hits = []

  const cutoffs = {
    Left: false,
    Right: false,
    Up: false,
    Down: false,
  }

  for (let i = 1; i <= radius; ++i) {
    const getSideCell = (dir: TPoint) => Point.add(center)(Point.mul(i)(dir))
    for (const direction of Object.keys(cutoffs)) {
      // Object.keys assumes type of keys to be 'string'
      const directionAssert = direction as keyof typeof cutoffs
      const cell = getSideCell(Point[directionAssert])
      if (EMPTY_FIELD[cell.y * GRID_WIDTH + cell.x] === Kind.WallHard) {
        cutoffs[directionAssert] = true
      }

      if (!cutoffs[directionAssert] && walls.find(Point.equals(cell))) {
        hits.push(cell)
      }
    }
  }
  return hits
}
