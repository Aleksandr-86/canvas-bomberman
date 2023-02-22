import { BaseGameObject } from './baseGameObject'

export class Rect extends BaseGameObject {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string,
    public z = 0
  ) {
    super()
  }

  exec(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
