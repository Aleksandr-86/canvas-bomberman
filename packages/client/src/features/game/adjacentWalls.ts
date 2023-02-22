import { EMPTY_FIELD, CELL_WIDTH } from './const'
import { Kind } from './types'
import { Point, type PointLike } from './utils'

/**
 * Gets cell value from point
 * @param p point (in game space)
 */
const getFieldCell = ({ x, y }: PointLike) => {
  return EMPTY_FIELD[y * CELL_WIDTH + x]
}

const unit = {
  left: new Point(-1, 0),
  right: new Point(1, 0),
  up: new Point(0, -1),
  down: new Point(0, 1),
}

/**
 * Create list of coordinates (screen space) of adjacent walls affected by explosion
 * @param walls list of coordinates to match (screen space)
 * @param center coordinate of explosion center (screen space)
 * @param radius explosion radius
 * @returns
 */
export function adjacentWalls(center: PointLike, radius: number) {
  const hits = []

  const cutoffs = {
    left: false,
    right: false,
    up: false,
    down: false,
  }

  const centerCell = new Point(center.x, center.y).apply(
    c => Math.floor(c / CELL_WIDTH) * CELL_WIDTH
  )

  hits.push(center)

  for (let i = 1; i <= radius; ++i) {
    const cellLeft = new Point(
      centerCell.x / CELL_WIDTH + -1 * i,
      centerCell.y / CELL_WIDTH
    )

    if (!cutoffs.left && getFieldCell(cellLeft) !== Kind.WallHard) {
      hits.push(cellLeft.scale(CELL_WIDTH))
    } else {
      cutoffs.left = true
    }

    const cellRight = new Point(
      centerCell.x / CELL_WIDTH + 1 * i,
      centerCell.y / CELL_WIDTH
    )
    if (!cutoffs.right && getFieldCell(cellRight) !== Kind.WallHard) {
      hits.push(cellRight.scale(CELL_WIDTH))
    } else {
      cutoffs.right = true
    }

    const cellUp = new Point(
      centerCell.x / CELL_WIDTH,
      centerCell.y / CELL_WIDTH + -1 * i
    )
    if (!cutoffs.up && getFieldCell(cellUp) !== Kind.WallHard) {
      hits.push(cellUp.scale(CELL_WIDTH))
    } else {
      cutoffs.up = true
    }

    const cellDown = new Point(
      centerCell.x / CELL_WIDTH,
      centerCell.y / CELL_WIDTH + 1 * i
    )
    if (!cutoffs.down && getFieldCell(cellDown) !== Kind.WallHard) {
      hits.push(cellDown.scale(CELL_WIDTH))
    } else {
      cutoffs.down = true
    }
  }

  return hits
}
