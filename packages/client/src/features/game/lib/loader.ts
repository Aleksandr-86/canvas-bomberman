import { loadImage } from '../utils'
import { type SceneContext } from './sceneContext'
import { Texture } from './texture'

type Resource = {
  key: string
  url: string
  onLoad?: (file: any) => void
}

export class Loader {
  private queue: Resource[] = []
  public status: 'ready' | 'loading' = 'ready'

  constructor(private scene: SceneContext) {}

  image(key: string, url: string, onLoad?: (file: Texture) => void) {
    this.queue.push({
      key,
      url,
      onLoad,
    })
  }

  async start() {
    this.status = 'loading'

    for (const { url, key, onLoad } of this.queue) {
      try {
        const image = await loadImage(url)
        const texture = new Texture(key, image)
        if (onLoad) {
          onLoad(texture)
        }

        this.scene.textures.set(key, texture)
      } catch (error) {
        console.error(error)
      }
    }
    // console.log(this.scene.textures.get('nesBomberman'))
    this.queue = []
    this.status = 'ready'
  }
}
