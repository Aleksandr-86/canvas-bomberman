export interface Drawable {
  x: number
  y: number
  width: number
  height: number
  exec: (ctx: CanvasRenderingContext2D) => void
}

export class Rect implements Drawable {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public color: string = 'black'
  ) {}

  exec(ctx: CanvasRenderingContext2D) {
    const { x, y, width, height, color } = this
    ctx.fillStyle = color

    ctx.fillRect(x, y, width, height)

    ctx.fillStyle = ''
  }
}

export class Image implements Drawable {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public image: CanvasImageSource
  ) {}

  exec(ctx: CanvasRenderingContext2D) {
    const { x, y, width, height, image } = this

    ctx.drawImage(image, x, y, width, height)
  }
}

export class Text implements Drawable {
  public width: number
  public height: number

  constructor(
    public x: number,
    public y: number,
    public text: string,
    public fontSize: number
  ) {
    this.width = fontSize
    this.height = text.length * fontSize
  }

  exec(ctx: CanvasRenderingContext2D) {
    const { x, y, fontSize, text } = this

    ctx.font = `${fontSize}px monospace`
    ctx.fillText(text, x, y)
  }
}
