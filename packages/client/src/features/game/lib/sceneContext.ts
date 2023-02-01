import { type FrameData } from './ticker'
import { type Texture } from './texture'
import { GameObjectFactory } from './gameObjects'
import { Vec2 } from '../utils'
import { type SceneObject } from './gameObjects/types'

export class SceneContext {
  public displayList: SceneObject[] = []
  public textures = new Map<string, Texture>()
  public add = new GameObjectFactory(this)

  constructor(private dimensions: Vec2) {}

  private depthSort() {
    this.displayList.sort(({ z: za }, { z: zb }) => za - zb)
  }

  public render(ctx: CanvasRenderingContext2D, time: FrameData) {
    this.depthSort()

    ctx.clearRect(0, 0, this.dimensions.x, this.dimensions.y)

    /*
      Transformation Matrix
     | a - scaleX c - skewX  e - dx |
     | b - skewY  d - scaleY f - dy |
     | 0          0          1      |

      DOMMatrix([a, b, c, d, e, f])
    */
    const zeroMatrix = new DOMMatrix([1, 0, 0, 1, 0, 0])
    ctx.setTransform(zeroMatrix)
    this.displayList.forEach(o => o.exec(ctx, time))
  }
}
