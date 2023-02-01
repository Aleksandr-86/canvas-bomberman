import { type Point } from '../../../store/gameSlice'

/* origin is at the top left */
export class Vec2 {
  static get Down() {
    return new Vec2(0, 1)
  }
  static get Up() {
    return new Vec2(0, -1)
  }
  static get Left() {
    return new Vec2(-1, 0)
  }
  static get Right() {
    return new Vec2(1, 0)
  }
  static get Zero() {
    return new Vec2(0, 0)
  }

  static add(v1: Vec2, v2: Vec2) {
    return new Vec2(v1.x + v2.x, v1.y + v2.y)
  }

  static lerp(from: Vec2, to: Vec2, t: number) {
    return new Vec2(from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t)
  }

  static mul(vec: Vec2, by: number) {
    return new Vec2(vec.x * by, vec.y * by)
  }

  copy() {
    return new Vec2(this.x, this.y)
  }

  get point(): Point {
    return { x: this.x, y: this.y }
  }

  static fromPoint({ x, y }: Point) {
    return new Vec2(x, y)
  }

  static equals(v1: Vec2, v2: Vec2) {
    return v1.x === v2.x && v1.y === v2.y
  }

  static isVec(something: unknown) {
    return something instanceof Vec2
  }

  constructor(public x: number, public y: number) {}
}
