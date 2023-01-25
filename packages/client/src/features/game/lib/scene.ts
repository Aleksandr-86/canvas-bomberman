import { type Drawable } from './gameObjects'
import { type Keyboard } from './keyboard'
import { getPlayer } from '../gameActions'
import { CAMERA_HEIGHT, CAMERA_WIDTH, CELL_WIDTH } from '../const'

interface Timestep {
  delta: number
  now: number
  frameCount: number
}

export interface SceneContext {
  time: Timestep
  scene: Scene
  kbd: Keyboard
}

export class Scene {
  private objects = new Map<string, Drawable>()

  public add(object: Drawable) {
    if (this.objects.has(object.id)) {
      console.error('object with this id already exists, not adding')
      return
    }

    this.objects.set(object.id, object)
  }

  public getById(id: string) {
    const obj = this.objects.get(id)

    if (!obj) {
      throw new Error('object with given id not found')
    }

    return obj
  }

  public clear() {
    this.objects.clear()
  }

  public sort() {
    this.objects = new Map(
      [...this.objects.entries()].sort(([_a, { z: za }], [_b, { z: zb }]) => {
        return za - zb
      })
    )
  }

  public render(ctx: CanvasRenderingContext2D, delta: number) {
    const player = getPlayer()

    ctx.save()
    ctx.translate(
      -player.x * CELL_WIDTH + CAMERA_WIDTH / 2,
      -player.y * CELL_WIDTH + CAMERA_HEIGHT / 2
    )
    this.objects.forEach(o => o.exec(ctx, delta))
    ctx.restore()
  }
}
