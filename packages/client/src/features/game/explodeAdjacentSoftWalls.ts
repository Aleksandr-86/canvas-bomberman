import { FieldState } from './types'
import { Vec2 } from './utils'
import { Kind } from './types'

function canExplode(tile: Kind) {
  return tile === Kind.WallSoft
}

export function explodeAdjacentSoftWalls(field: FieldState, { x, y }: Vec2) {
  const left = field[y][x - 1]
  const right = field[y][x + 1]
  const up = field[y - 1][x]
  const down = field[y + 1][x]

  if (canExplode(left)) field[y][x - 1] = Kind.Empty
  if (canExplode(right)) field[y][x + 1] = Kind.Empty
  if (canExplode(up)) field[y - 1][x] = Kind.Empty
  if (canExplode(down)) field[y + 1][x] = Kind.Empty

  field[y][x] = Kind.Empty
}
