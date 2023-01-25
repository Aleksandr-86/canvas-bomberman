import { type Drawable } from './types'
import { nanoid } from '@reduxjs/toolkit'
import { Vec2 } from '../../utils'

export class Sprite implements Drawable {
  constructor(
    public texture: HTMLImageElement,
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
    ctx.drawImage(this.texture, this.x, this.y, this.width, this.height)
  }
}
