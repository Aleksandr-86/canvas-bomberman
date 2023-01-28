import { startGame } from '../gameActions'
import { Keyboard } from './keyboard'
import { Scene, type SceneContext } from './scene'
import { Ticker } from './ticker'

interface GameConfig {
  width: number
  heigth: number
  root: HTMLCanvasElement
  create: (scene: Scene) => void
  update: (ctx: SceneContext) => void
  backgroundColor: string
}

export class Game {
  private kbd: Keyboard = new Keyboard()
  private scene = new Scene()
  private ticker = new Ticker()
  private root: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  public screenWidth: number
  public screenHeight: number
  private update: (ctx: SceneContext) => void
  private create: (scene: Scene) => void
  public started = false

  constructor({
    root,
    width,
    heigth,
    update,
    create,
    backgroundColor,
  }: GameConfig) {
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
    this.root.style.backgroundColor = backgroundColor
  }

  start() {
    this.create(this.scene)
    this.ticker.add(time => {
      this.update({
        time,
        kbd: this.kbd,
        scene: this.scene,
      })
      this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight)
      this.scene.render(this.ctx, time)
    })

    this.ticker.start()
    this.started = true
    startGame()
  }

  stop() {
    this.ticker.stop()
    this.started = false
  }
}
