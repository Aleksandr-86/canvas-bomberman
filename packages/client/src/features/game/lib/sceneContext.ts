import { type FrameData } from './ticker'
import { type Texture } from './texture'
import { GameObjectFactory } from './gameObjects'
import { type SceneObject } from './gameObjects/types'
import { Camera } from './camera'
import { type PointLike } from '../utils'
import { AnimationRunner } from './animationRunner'

export class SceneContext {
  public displayList: SceneObject[] = []
  public textures = new Map<string, Texture>()
  public add = new GameObjectFactory(this)
  public create = this.add.creator
  public anims = new AnimationRunner()
  public camera: Camera

  constructor(private dimensions: PointLike) {
    this.camera = new Camera(this.dimensions.x, this.dimensions.y)
  }

  public sortSceneByDepth() {
    this.displayList.sort(({ z: za }, { z: zb }) => za - zb)
  }

  public render(ctx: CanvasRenderingContext2D, time: FrameData) {
    ctx.clearRect(0, 0, this.dimensions.x, this.dimensions.y)

    ctx.save()
    ctx.translate(this.camera.value.x, this.camera.value.y)

    this.sortSceneByDepth()

    this.displayList = this.displayList.filter(obj => !obj.shouldDestroy)

    this.displayList.forEach(obj => obj.exec(ctx, time))
    ctx.restore()
  }
}
