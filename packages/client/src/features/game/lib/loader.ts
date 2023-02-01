import { loadImage } from '../utils'
import { type SceneContext } from './sceneContext'
import { Texture } from './texture'

type FileType = 'image'

type Resource = {
  type: FileType
  key: string
  url: string
}

const FileTypeToImpl = {
  image: loadImage,
} as const

export class Loader {
  private queue: Resource[] = []
  public status: 'ready' | 'loading' = 'ready'

  constructor(private scene: SceneContext) {}

  image(key: string, resourceUrl: string) {
    this.queue.push({
      key,
      type: 'image',
      url: resourceUrl,
    })
  }

  async start() {
    this.status = 'loading'

    for (const { url, type, key } of this.queue) {
      const loaderImpl = FileTypeToImpl[type]
      try {
        const image = await loaderImpl(url)
        this.scene.textures.set(key, new Texture(key, image))
      } catch (error) {
        console.error(error)
      }
    }

    this.queue = []
    this.status = 'ready'
  }
}
