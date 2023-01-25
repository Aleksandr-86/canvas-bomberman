import { type Drawable } from './types'
import { nanoid } from '@reduxjs/toolkit'

export class Sprite implements Drawable {
  constructor(
    public texture: HTMLImageElement,
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public id: string = nanoid()
  ) {}

  exec(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.texture, this.x, this.y, this.width, this.height)
  }
}
