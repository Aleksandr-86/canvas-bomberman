import { type Drawable } from './types'
import { type TiledTexture } from './tilemap'
import { nanoid } from '@reduxjs/toolkit'

export class TiledSprite implements Drawable {
  constructor(
    public tile: TiledTexture,
    public x: number,
    public y: number,
    public z = 1,
    public width: number,
    public height: number,
    public id: string = nanoid()
  ) {}

  exec(ctx: CanvasRenderingContext2D) {
    const {
      tile: {
        frame: { origin, width: frameWidth },
        texture,
      },
      x,
      y,
      width,
      height,
    } = this

    ctx.drawImage(
      texture,
      origin.x,
      origin.y,
      frameWidth,
      frameWidth,
      x,
      y,
      width,
      height
    )
  }
}
