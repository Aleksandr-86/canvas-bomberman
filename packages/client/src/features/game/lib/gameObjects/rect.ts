import { type Drawable } from './types'
import { nanoid } from '@reduxjs/toolkit'

export class Rect implements Drawable {
  constructor(
    public color: string,
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public id: string = nanoid()
  ) {}
  exec(ctx: CanvasRenderingContext2D) {
    ctx.save()
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.restore()
  }
}
