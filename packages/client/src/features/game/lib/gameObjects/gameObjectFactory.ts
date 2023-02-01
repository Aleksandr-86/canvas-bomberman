import { type SceneContext } from '../sceneContext'
import { type Texture } from '../texture'
import { Rect } from './rect'
import { Sprite } from './sprite'
import { type SceneObject } from './types'

type TileGridConfig<C extends number = number> = {
  grid: C[]
  width: number
  height: number
  cellSize: number
  cells: Record<number, string>
}

export class GameObjectFactory {
  constructor(private scene: SceneContext) {}

  private register(object: SceneObject | SceneObject[]) {
    this.scene.displayList = Array.isArray(object)
      ? this.scene.displayList.concat(object)
      : [...this.scene.displayList, object]
  }

  rect(x: number, y: number, width: number, height: number, fill: string) {
    const gameObject = new Rect(x, y, width, height, fill)

    this.scene.displayList.push()
    return gameObject
  }

  tileGrid({ grid, width, height, cellSize, cells }: TileGridConfig) {
    const tiles = []

    for (let i = 0; i < grid.length; ++i) {
      const textureKey = grid[i]
      const texture =
        this.scene.textures.get(cells[textureKey]) ||
        (this.scene.textures.get('white') as Texture)

      const col = i % width
      const row = Math.trunc(i / height)

      // fallback textures are 128 px wide, add crop frame on the fly
      const cropKey = '__crop'
      texture.addFrame(cropKey, {
        x: 0,
        y: 0,
        width: cellSize,
        height: cellSize,
      })

      const sprite = new Sprite(
        col * cellSize,
        row * cellSize,
        texture,
        cropKey
      )

      // put grid in background
      sprite.z = -1
      tiles.push(sprite)
    }

    this.register(tiles)
    return tiles
  }

  sprite(
    x: number,
    y: number,
    textureKey: string,
    frame: string | [string, Rect] = '__base'
  ) {
    const texture =
      this.scene.textures.get(textureKey) ||
      (this.scene.textures.get('white') as Texture)

    // TODO: handle frames

    if (Array.isArray(frame)) {
      const [key, rect] = frame
      texture.addFrame(key, rect)
      const gameObject = new Sprite(x, y, texture, key)
      this.register(gameObject)
      return gameObject
    } else {
      const gameObject = new Sprite(x, y, texture)
      this.register(gameObject)
      return gameObject
    }
  }
}
