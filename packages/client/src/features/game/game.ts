import { Vec2 } from './lib'

interface GameConfig {
  width: number
  heigth: number
  backgroundColor: string
  root: HTMLCanvasElement
}

interface Renderable {
  origin: Vec2
  dimensions: Vec2
}

class Game {
  private root: HTMLCanvasElement

  private scene: Renderable[] = []

  private ctx: CanvasRenderingContext2D

  constructor({ root, backgroundColor }: GameConfig) {
    this.root = root
    this.root.style.backgroundColor = backgroundColor
    const ctx = root.getContext('2d')
    if (!ctx) {
      throw new Error('Error getting canvas context')
    }
    this.ctx = ctx
  }

  public start() {
    const cb = () => {
      this.scene.forEach(({ origin, dimensions, color }) => {
        this.ctx.clearRect(0, 0, 10000, 100000)

        if (color) {
          this.ctx.fillStyle = color
        }

        this.ctx.fillRect(origin.x, origin.y, dimensions.x, dimensions.y)
        this.ctx.fillStyle = ''
      })
      window.requestAnimationFrame(cb)
    }
    cb()
  }

  public add(gameObject: Renderable) {
    this.scene.push(gameObject)
  }
}

class Container implements Renderable {
  constructor(
    public origin: Vec2,
    public dimensions: Vec2,
    public color: string = 'yellow'
  ) {}

  public move(direction: Vec2) {
    console.log('old dir', this.origin)
    this.origin = new Vec2(
      direction.x + this.origin.x,
      direction.y + this.origin.y
    )
    console.log('new dir', this.origin)
  }
}

export { Game, Container }
