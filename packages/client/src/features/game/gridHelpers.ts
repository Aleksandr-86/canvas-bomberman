import { CELL_WIDTH } from './const'
import { Point, type PointLike } from './utils'

export function nearestCell(p: PointLike) {
  return Point.from(p).map(c => Math.round(c / CELL_WIDTH) * CELL_WIDTH)
}

export function selectNearbyCells(
  cells: PointLike[],
  center: PointLike,
  radius: number
) {
  const currentCell = nearestCell(center)
  const offset = CELL_WIDTH * radius

  return cells.filter(
    ({ x, y }) =>
      x >= currentCell.x - offset &&
      x <= currentCell.x + offset &&
      y >= currentCell.y - offset &&
      y <= currentCell.y + offset
  )
}

type AtlasFrames = { cellSize: number; entries: Record<string, PointLike> }
export function scaleAtlasFrames({ cellSize, entries }: AtlasFrames) {
  return Object.fromEntries(
    Object.entries(entries).map(([key, { x, y }]) => [
      key,
      {
        x: x * cellSize,
        y: y * cellSize,
        width: cellSize,
        height: cellSize,
      },
    ])
  )
}
