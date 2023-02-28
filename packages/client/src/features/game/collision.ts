import { Point, type PointLike } from './utils'

/**
 * Resolve collision between given rectangle and circle
 * @param rectOrigin top-left point
 * @param rectDimensions width and length
 * @param circleCenter
 * @param circleRadius
 */
export function rectCircleResolve(
  rectOrigin: PointLike,
  rectDimensions: PointLike,
  circleCenter: PointLike,
  circleRadius: number
) {
  const res = Point.from(circleCenter)

  // top-left and bottom-right points
  const tl = Point.from(rectOrigin)
  const br = tl.copy().add(Point.from(rectDimensions))

  // clamp to nearest point on rectangle
  const nearestPoint = res.copy().clamp(tl, br)

  const rayToNearest = nearestPoint.sub(res)

  const overlap = circleRadius - rayToNearest.mag()

  if (overlap > 0) {
    const normal = rayToNearest.normalized()
    res.sub(normal.scale(overlap))
  }
  return res
}

/**
 * Check if two circles with given centers and radii overlap
 */
export function circleCircleCollision(
  c1: PointLike,
  r1: number,
  c2: PointLike,
  r2: number
) {
  return (c2.x - c1.x) ** 2 + (c2.y - c1.y) ** 2 <= (r1 + r2) ** 2
}
