import { Keyboard } from './keyboard'
import { Scene } from './scene'

interface GameConfig {
  width: number
  heigth: number
  root: HTMLCanvasElement
  create: (scene: Scene) => void
  update: (ctx: SceneContext) => void
}

export interface SceneContext {
  delta: number
  scene: Scene
  kbd: Keyboard
}

export class Game {
  private root: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private kbd: Keyboard = new Keyboard()
  private prevTime = performance.now()
  private scene = new Scene()
  public screenWidth: number
  public screenHeight: number
  private delta = 0
  private update: (ctx: SceneContext) => void
  private rafID = 0
  private create: (scene: Scene) => void

  constructor({ root, width, heigth, update, create }: GameConfig) {
    this.root = root
    this.screenWidth = width
    this.screenHeight = heigth
    this.update = update
    this.create = create

    const ctx = root.getContext('2d')

    if (!ctx) {
      throw new Error('Error getting context')
    }
    ctx.imageSmoothingEnabled = false

    this.ctx = ctx
    this.root.width = width
    this.root.height = heigth
    this.root.style.backgroundColor = 'lightgray'
  }

  start() {
    this.create(this.scene)
    this.tick()
  }

  tick = () => {
    const now = performance.now()
    this.delta = (now - this.prevTime) / 1000
    this.prevTime = now
    this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight)

    this.update({
      kbd: this.kbd,
      delta: this.delta,
      scene: this.scene,
    })

    this.scene.objects.forEach(object => object.exec(this.ctx))

    this.rafID = requestAnimationFrame(this.tick)
  }

  stop() {
    cancelAnimationFrame(this.rafID)
  }
}
