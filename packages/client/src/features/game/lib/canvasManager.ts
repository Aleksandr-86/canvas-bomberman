import { Vec2 } from '../utils/vec2'

export class CanvasRenderer {
  private canvasContext: CanvasRenderingContext2D

  constructor(private canvasElement: HTMLCanvasElement) {
    const ctx = canvasElement.getContext('2d')

    if (!ctx) throw new Error('Error getting context')
    ctx.imageSmoothingEnabled = false
    this.canvasContext = ctx
  }

  rect({ x, y }: Vec2, { x: width, y: height }: Vec2, color = 'black') {
    this.canvasContext.fillStyle = color
    this.canvasContext.fillRect(x, y, width, height)
    this.canvasContext.fillStyle = ''
  }

  sas() {
                  console.log('test')
                  console.log('test')
                  console.log('test')
                  console.log('test')
                  console.log('test')
                  console.log('test')
                  console.log('test')
                  console.log('test')
                  console.log('test')
  }

  image(
    image: CanvasImageSource,
    { x, y }: Vec2,
    { x: width, y: height }: Vec2,
    { x: cropX, y: cropY }: Vec2 = { x: 0, y: 0 },
    { x: cropWidth, y: cropHeight }: Vec2 = { x: width, y: height }
  ) {
    this.canvasContext.drawImage(
      image,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      x,
      y,
      width,
      height
    )
  }

  draw(drawFn: (ctx: CanvasRenderingContext2D) => void) {
    drawFn(this.canvasContext)
  }
}
