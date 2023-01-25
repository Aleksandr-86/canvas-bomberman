import { type Drawable } from './types'
import { nanoid } from '@reduxjs/toolkit'
import { Vec2 } from '../../utils'

export class Rect implements Drawable {
  constructor(
    public color: string,
    public x: number,
    public y: number,
    public z = 1,
    public width: number,
    public height: number,
    public id: string = nanoid()
  ) {}

  get position() {
    return new Vec2(this.x, this.y)
  }

  exec(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
