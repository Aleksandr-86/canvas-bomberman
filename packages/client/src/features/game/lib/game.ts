import { Keyboard } from './keyboard'
import { Loader } from './loader'
import { SceneContext } from './sceneContext'
import { FrameData, Ticker } from './ticker'
import { Point } from '../utils'
import { gameEnded } from '../gameActions'

/**
 * `preload` - used to load assets
 *
 * `create` - create game objects, run once after `preload`
 *
 * `update` - run every frame, update your gameObjects here
 */
export type SceneConfig = {
  preload: (load: Loader) => void
  create: (scene: SceneContext) => void
  update: (scene: SceneContext, frame: FrameData, kbd: Keyboard) => void
}

export interface GameConfig {
  width: number
  height: number
  root: HTMLCanvasElement
  scene: SceneConfig
  backgroundColor: string
}

export class Game {
  private kbd: Keyboard = new Keyboard()

  private sceneContext

  private loader

  private ticker = new Ticker()

  private scene: SceneConfig

  private root: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  public started = false

  constructor({ root, width, height, backgroundColor, scene }: GameConfig) {
    this.root = root
    const ctx = root.getContext('2d')

    if (!ctx) {
      throw new Error('Error getting context')
    }

    this.ctx = ctx
    this.setCanvasProps(width, height, backgroundColor)
    this.scene = scene
    this.sceneContext = new SceneContext(new Point(width, height), () =>
      this.stop()
    )
    this.loader = new Loader(this.sceneContext)
  }

  private setCanvasProps(
    width: number,
    height: number,
    backgroundColor: string
  ) {
    this.ctx.imageSmoothingEnabled = false

    this.root.width = width
    this.root.height = height
    this.root.style.backgroundColor = backgroundColor
  }

  private async loadFallbackTextures() {
    const colors = ['black', 'white', 'yellow', 'blue', 'red']

    const textureSize = 128
    const canvas = document.createElement('canvas')
    canvas.width = textureSize
    canvas.height = textureSize
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('error getting context')

    colors.forEach(color => {
      ctx.fillStyle = color
      ctx.fillRect(0, 0, textureSize, textureSize)
      this.loader.image(color, canvas.toDataURL())
    })

    await this.loader.start()
  }

  async start() {
    await this.loadFallbackTextures()
    this.scene.preload(this.loader)
    await this.loader.start()

    this.scene.create(this.sceneContext)

    this.ticker.add(frameData => {
      this.scene.update(this.sceneContext, frameData, this.kbd)
      this.sceneContext.render(this.ctx)
    })

    this.ticker.start()
    this.started = true
  }

  stop() {
    gameEnded()
    this.ticker.stop()
    this.started = false
  }
}
