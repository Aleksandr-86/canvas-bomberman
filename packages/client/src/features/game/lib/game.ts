import { Keyboard } from './keyboard'
import { loadTextures } from './loadTextures'
import { Scene } from './scene'
import { Ticker } from './ticker'

interface GameConfig {
  width: number
  heigth: number
  root: HTMLCanvasElement
  create: (scene: Scene) => void
  update: (ctx: SceneContext) => void
  backgroundColor: string
}

export interface SceneContext {
  delta: number
  scene: Scene
  kbd: Keyboard
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
  private textures: Record<string, HTMLImageElement> = {}

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

  async init() {
    this.textures = await loadTextures()
  }

  start() {
    this.create(this.scene)
    this.ticker.add(delta => {
      this.update({
        delta,
        kbd: this.kbd,
        scene: this.scene,
      })
    })

    this.ticker.start()
  }

  stop() {
    this.ticker.stop()
  }
}
