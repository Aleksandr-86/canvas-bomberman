import { PLAYER_STARTING_POSITION } from './const'
import { type FieldState } from './types'
import { Kind } from './types'
import { Vec2 } from './utils'

function isStartingPosition(cell: Vec2) {
  return Vec2.equals(cell, PLAYER_STARTING_POSITION)
}

export function fillSoftWalls(field: FieldState) {
  return field.map((row, rowIdx) => {
    return row.map((cell, colIdx) => {
      if (isStartingPosition(new Vec2(rowIdx, colIdx))) return cell
      if (cell !== Kind.Empty) return cell

      const chance = Math.random() * 100
      if (chance > 25) return cell

      return Kind.WallSoft
    })
  })
}
