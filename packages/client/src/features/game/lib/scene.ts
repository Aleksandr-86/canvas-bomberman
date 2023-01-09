import { Drawable } from './game-objects'

interface SceneObject extends Drawable {
  [key: string]: unknown
}

export class Scene {
  public objects: SceneObject[] = []

  public add(obj: SceneObject) {
    this.objects.push(obj)
  }
}
