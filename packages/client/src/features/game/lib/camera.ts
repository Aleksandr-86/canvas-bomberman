import { clamp } from '../utils'
import type { Position } from './gameObjects/types'

export class Camera {
  private cameraTarget = { x: 0, y: 0 }

  constructor(private cameraWidth: number, private cameraHeight: number) {}

  /*
      cameraTransform
      -240 < -pX + cW / 2 < 0
      -320 < -pY + cH / 2 < 0
    */

  bind(object: Position) {
    this.cameraTarget = object
  }

  get value() {
    return {
      x: clamp(-this.cameraTarget.x + this.cameraWidth / 2, -240, 0),
      y: clamp(-this.cameraTarget.y + this.cameraHeight / 2, -320, 0),
    }
  }
}
