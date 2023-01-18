import { uid } from '../utils/uid'

export interface Drawable {
  id: string
  x: number
  y: number
  width: number
  height: number
  exec: (ctx: CanvasRenderingContext2D) => void
}

export class Sprite implements Drawable {
  constructor(
    public texture: HTMLImageElement,
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public id: string = uid()
  ) {}

  exec(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.texture, this.x, this.y, this.width, this.height)
  }
}
