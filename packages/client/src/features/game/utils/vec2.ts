export class Vec2 {
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
