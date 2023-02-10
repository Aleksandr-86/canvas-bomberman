import { type FrameData } from './ticker'
import { type Texture } from './texture'
import { GameObjectFactory } from './gameObjects'
import { type SceneObject } from './gameObjects/types'
import { Camera } from './camera'
import { TPoint } from '../utils/point'

export class SceneContext {
  public displayList: SceneObject[] = []
  public textures = new Map<string, Texture>()
  public add = new GameObjectFactory(this)
  public create = this.add.creator
  public camera: Camera

  constructor(private dimensions: TPoint) {
    this.camera = new Camera(this.dimensions.x, this.dimensions.y)
  }

  public depthSort() {
    this.displayList.sort(({ z: za }, { z: zb }) => za - zb)
  }

  public render(ctx: CanvasRenderingContext2D, time: FrameData) {
    ctx.clearRect(
      -1000,
      -1000,
      this.dimensions.x * 100,
      this.dimensions.y * 100
    )

    ctx.save()
    ctx.translate(this.camera.value.x, this.camera.value.y)

    this.displayList = this.displayList.filter(obj => !obj.shouldDestroy)

    this.displayList.forEach(obj => obj.exec(ctx, time))
    ctx.restore()
  }
}
