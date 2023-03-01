import { Sprite } from './lib'
import { Point, type PointLike } from './utils'
import { pointsAdded } from './gameActions'
import { Points } from './const'

/**
 * Container for manipulations withs sprites
 * Supports search, addition, destruction (calls destroy() on given sprite)
 */
export class SpriteList {
  private list: Sprite[]

  constructor(sprites: Sprite[] = []) {
    this.list = sprites
  }

  add(...p: Sprite[]) {
    this.list = this.list.concat(p)
    return this.list
  }

  destroyByPoint(p: PointLike) {
    const found = this.list.find(sprite => Point.from(sprite).equals(p))

    if (found) {
      this.list = this.list.filter(sprite => sprite !== found)
      found.destroy()
    }

    return found
  }

  byPoint(p: PointLike) {
    return this.list.find(sprite => Point.from(sprite).equals(p))
  }

  destroyAll() {
    for (const sprite of this.list) {
      sprite.destroy()
    }
    this.list = []
  }

  destroyLast() {
    this.list.pop()?.destroy()
  }

  unshift(s: Sprite) {
    this.list.unshift(s)
  }

  toArray() {
    return Array.from(this.list)
  }

  get length() {
    return this.list.length
  }

  *[Symbol.iterator]() {
    yield* this.list
  }
}
