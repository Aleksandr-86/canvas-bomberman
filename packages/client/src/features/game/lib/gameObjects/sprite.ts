import type { Depth, Position, Transform, Drawable } from './types'
import { type Texture } from '../texture'

export class Sprite implements Drawable, Position, Depth, Transform {
  public z = 0
  public scaleX = 1
  public scaleY = 1
  public skewX = 0
  public skewY = 0
  public translateX = 0
  public translateY = 0
  public rotation = 0
  public width
  public height

  constructor(
    public x: number,
    public y: number,
    public texture: Texture,
    private frame: keyof typeof texture.frames = '__base'
  ) {
    const { width, height } = texture.frames[frame]
    this.width = width
    this.height = height
  }

  exec(ctx: CanvasRenderingContext2D) {
    const {
      texture,
      frame,
      x,
      y,
      width,
      height,
      scaleX,
      scaleY,
      skewX,
      skewY,
      translateX,
      translateY,
    } = this

    const {
      x: sx,
      y: sy,
      width: sWidth,
      height: sHeight,
    } = texture.frames[frame]

    ctx.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY)
    ctx.drawImage(texture.source, sx, sy, sWidth, sHeight, x, y, width, height)
  }
}
