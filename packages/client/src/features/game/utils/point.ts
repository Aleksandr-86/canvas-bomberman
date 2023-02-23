export type PointLike = { x: number; y: number }

export class Point {
  constructor(public x = 0, public y = 0) {}

  dot(p: PointLike) {
    return this.x * p.x + this.y + p.y
  }

  mag() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  mul(p: PointLike) {
    return new Point(this.x * p.x, this.y * p.y)
  }

  scale(by: number) {
    return new Point(this.x * by, this.y * by)
  }

  add(p: PointLike) {
    return new Point(this.x + p.x, this.y + p.y)
  }

  sub(p: PointLike) {
    return new Point(this.x - p.x, this.y - p.y)
  }

  normalize() {
    const mag = this.mag()
    return new Point(this.x / mag, this.y / mag)
  }

  equals(p: PointLike) {
    return this.x === p.x && this.y === p.y
  }

  copy() {
    return new Point(this.x, this.y)
  }

  apply(func: (arg: number) => number) {
    return new Point(func(this.x), func(this.y))
  }

  clamp(min: PointLike, max: PointLike) {
    const res = this.copy()

    if (this.x < min.x) {
      res.x = min.x
    } else if (this.x > max.x) {
      res.x = max.x
    }

    if (this.y < min.y) {
      res.y = min.y
    } else if (this.y > max.y) {
      this.y = max.y
    }

    return res
  }

  static lerp(from: Point, to: Point, t: number) {
    if (t <= 0) {
      return from.copy()
    } else if (t >= 1) {
      return to.copy()
    } else {
      return from.add(to.sub(from).scale(t))
    }
  }

  static from(p: PointLike) {
    return new Point(p.x, p.y)
  }

  toString() {
    return `x:${this.x}|y:${this.y}`
  }
}
