// coordinate origin is at the top left

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
    return new Vec2(v1.x + v2.x, v2.y + v2.y)
  }

  copy() {
    return new Vec2(this.x, this.y)
  }

  get pojo() {
    return { x: this.x, y: this.y }
  }

  static equals(v1: Vec2, v2: Vec2) {
    return v1.x === v2.x && v1.y === v2.y
  }

  static isVec(something: unknown) {
    return something instanceof Vec2
  }

  constructor(public x: number, public y: number) {}
}
