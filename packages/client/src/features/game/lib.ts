class Vec2 {
  static get Down() {
    return new Vec2(0, -1)
  }
  static get Up() {
    return new Vec2(0, 1)
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

  static isVec(something: unknown) {
    return something instanceof Vec2
  }

  constructor(public x: number, public y: number) {}
}

class Rect {
  private origin: Vec2 | 0 = 0
  private dimensions: Vec2 | 0 = 0

  constructor(position: Vec2, size: Vec2)
  constructor(x: number, y: number, width: number, height: number)
  constructor(
    positionOrX: number | Vec2,
    dimensionsOrY: number | Vec2,
    width?: number,
    height?: number
  ) {
    if (positionOrX instanceof Vec2 && dimensionsOrY instanceof Vec2) {
      this.origin = positionOrX
      this.dimensions = dimensionsOrY
    }

    if (
      width &&
      height &&
      typeof positionOrX === 'number' &&
      typeof dimensionsOrY === 'number'
    ) {
      this.origin = new Vec2(positionOrX, dimensionsOrY)
      this.dimensions = new Vec2(width, height)
    }
  }
}

export { Vec2, Rect }
