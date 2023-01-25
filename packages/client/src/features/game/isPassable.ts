import { type FieldState, Kind } from './types'
import { Vec2 } from './utils'

export function isPassable(field: FieldState, { x, y }: Vec2) {
  const cell = field[y][x]

  return cell === Kind.Empty || cell === Kind.Bomb
}
