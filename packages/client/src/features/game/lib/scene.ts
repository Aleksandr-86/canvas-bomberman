import { type Drawable } from './gameObjects'
import { type Keyboard } from './keyboard'

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

  public render(ctx: CanvasRenderingContext2D, delta: number) {
    this.objects.forEach(o => o.exec(ctx, delta))
  }
}
