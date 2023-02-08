import { type TPoint, Point } from './utils'

export function adjacentWalls(walls: TPoint[], center: TPoint, radius: number) {
  const hits = []

  for (let i = 1; i < radius; ++i) {
    const side = (dir: TPoint) => Point.add(center)(Point.mul(i)(dir))

    const left = side(Point.Left)
    const right = side(Point.Right)
    const up = side(Point.Up)
    const down = side(Point.Down)

    if (walls.find(Point.equals(left))) hits.push(left)
    if (walls.find(Point.equals(right))) hits.push(right)
    if (walls.find(Point.equals(up))) hits.push(up)
    if (walls.find(Point.equals(down))) hits.push(down)
  }
  return hits
}
