import { BaseGameObject } from './baseGameObject'
import type { Depth, Position, Drawable } from './types'

export class Rect extends BaseGameObject {
  public z = 0

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string
  ) {
    super()
  }

  exec(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
