export type PointLike = { x: number; y: number }
import { linearInterpolation } from './linearInterpolation'

export class Point {
  constructor(public x = 0, public y = 0) {}

  dot(p: PointLike) {
    return this.x * p.x + this.y + p.y
  }

  mag() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  mul(p: PointLike) {
    this.x *= p.x
    this.y *= p.y
    return this
  }

  scale(by: number) {
    this.mul({ x: by, y: by })
    return this
  }

  add(p: PointLike) {
    this.x += p.x
    this.y += p.y
    return this
  }

  sub(p: PointLike) {
    this.x -= p.x
    this.y -= p.y
    return this
  }

  normalized() {
    const mag = this.mag()
    return mag === 0 ? new Point() : new Point(this.x / mag, this.y / mag)
  }

  equals(p: PointLike) {
    return this.x === p.x && this.y === p.y
  }

  copy() {
    return new Point(this.x, this.y)
  }

  map(func: (arg: number) => number) {
    return new Point(func(this.x), func(this.y))
  }

  clamp(min: PointLike, max: PointLike) {
    if (this.x < min.x) {
      this.x = min.x
    } else if (this.x > max.x) {
      this.x = max.x
    }

    if (this.y < min.y) {
      this.y = min.y
    } else if (this.y > max.y) {
      this.y = max.y
    }
    return this
  }

  static linearInterpolation(from: Point, to: Point, t: number) {
    if (t <= 0) {
      return from.copy()
    } else if (t >= 1) {
      return to.copy()
    } else {
      return new Point(
        linearInterpolation(from.x, to.x, t),
        linearInterpolation(from.y, to.y, t)
      )
    }
  }

  static from(p: PointLike) {
    return new Point(p.x, p.y)
  }

  toString() {
    return `x:${this.x}|y:${this.y}`
  }
}
