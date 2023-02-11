import { TPoint } from '../../utils'
import { FrameData } from '../ticker'
import type { SceneObject } from './types'

export abstract class BaseGameObject implements SceneObject {
  shouldDestroy = false
  z = 0
  x = 0
  y = 0

  setPosition({ x, y }: TPoint) {
    this.x = x
    this.y = y
  }

  destroy() {
    this.shouldDestroy = true
  }

  abstract exec(ctx: CanvasRenderingContext2D, time: FrameData): void
}
