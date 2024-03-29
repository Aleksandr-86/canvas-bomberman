import { clamp } from '../utils'
import type { Position } from './gameObjects/types'

export class Camera {
  private cameraTarget = { x: 0, y: 0 }

  constructor(private cameraWidth: number, private cameraHeight: number) {}

  /*
      cameraTransform
      -240 < -pX + cW / 2 < 0
      -400 < -pY + cH / 2 < 0
    */

  bind(object: Position) {
    this.cameraTarget = object
  }

  get value() {
    return {
      x: Math.round(
        clamp(-this.cameraTarget.x + this.cameraWidth / 2, -400, 0)
      ),
      y: Math.round(clamp(-this.cameraTarget.y + this.cameraHeight / 2, 0, 0)),
    }
  }
}
