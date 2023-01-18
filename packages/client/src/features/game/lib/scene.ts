import { type Drawable } from './gameObjects'
import { type Keyboard } from './keyboard'

export interface SceneContext {
  delta: number
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
      console.error('object with given id not found')
      return
    }

    return obj
  }

  public render(ctx: CanvasRenderingContext2D) {
    this.objects.forEach(o => o.exec(ctx))
  }
}
