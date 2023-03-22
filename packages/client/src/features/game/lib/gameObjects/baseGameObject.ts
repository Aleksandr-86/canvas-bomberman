import { type PointLike } from '../../utils'
import { FrameData } from '../ticker'
import type { SceneObject } from './types'

export abstract class BaseGameObject implements SceneObject {
  shouldDestroy = false
  width = 0
  height = 0
  z = 0
  x = 0
  y = 0

  setPosition({ x = 0, y = 0 }: PointLike) {
    this.x = Math.round(x)
    this.y = Math.round(y)
  }

  destroy() {
    this.shouldDestroy = true
  }

  abstract exec(ctx: CanvasRenderingContext2D, time: FrameData): void
}
