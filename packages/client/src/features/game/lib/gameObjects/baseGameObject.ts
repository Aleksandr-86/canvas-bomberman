import { FrameData } from '../ticker'
import type { SceneObject } from './types'

export abstract class BaseGameObject implements SceneObject {
  shouldDestroy = false
  z = 0
  x = 0
  y = 0

  destroy() {
    this.shouldDestroy = true
  }

  abstract exec(ctx: CanvasRenderingContext2D, time: FrameData): void
}
