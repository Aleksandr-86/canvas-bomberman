import { type SceneContext } from '../sceneContext'
import { type Texture } from '../texture'
import { Rect } from './rect'
import { Sprite } from './sprite'
import { type SceneObject } from './types'

type TextureFrame = `${string}:${string}`

type TileGridConfig<C extends number = number> = {
  grid: C[]
  gridWidth: number
  cellSize: number
  cells: Record<C, TextureFrame>
  depth: number
}

export class GameObjectCreator {
  constructor(private scene: SceneContext) {}

  rect(x: number, y: number, width: number, height: number, fill: string) {
    const gameObject = new Rect(x, y, width, height, fill)

    return gameObject
  }

  sprite(
    x: number,
    y: number,
    textureKey: string,
    frameKey = '__base',
    width?: number,
    height?: number
  ) {
    const texture =
      this.scene.textures.get(textureKey) ||
      (this.scene.textures.get('white') as Texture)

    const gameObject = new Sprite(x, y, texture, frameKey)

    if (width) gameObject.width = width
    if (height) gameObject.height = height

    return gameObject
  }

  tileGrid({ grid, gridWidth, cellSize, cells, depth }: TileGridConfig) {
    const tiles = []

    for (let i = 0; i < grid.length; ++i) {
      const [textureKey, frameKey] = cells[grid[i]].split(':')

      const texture = this.scene.textures.get(textureKey)

      if (!texture) continue

      const col = i % gridWidth
      const row = Math.trunc(i / gridWidth)

      const sprite = new Sprite(
        col * cellSize,
        row * cellSize,
        texture,
        frameKey
      )

      sprite.width = cellSize
      sprite.height = cellSize

      sprite.z = depth
      tiles.push(sprite)
    }

    return tiles
  }
}

export class GameObjectFactory {
  public creator
  constructor(private scene: SceneContext) {
    this.creator = new GameObjectCreator(scene)
  }

  private register(object: SceneObject | SceneObject[]) {
    this.scene.displayList = Array.isArray(object)
      ? this.scene.displayList.concat(object)
      : [...this.scene.displayList, object]
    this.scene.depthSort()
  }

  /**
   * Create and add rectangle to scene
   */
  rect(x: number, y: number, width: number, height: number, fill: string) {
    const gameObject = this.creator.rect(x, y, width, height, fill)
    this.register(gameObject)
    return gameObject
  }

  /**
   * Create and add grid of tiles to scene
   *
   * From 1D array (row-major order) of tile kinds and mapping of tile kinds to colon-separated string describing texture and its frame
   *
   * If texture in mapping not found, cell is skipped
   *
   * `<textureKey>:<textureFrameKey>`
   */
  tileGrid(config: TileGridConfig) {
    const tiles = this.creator.tileGrid(config)
    this.register(tiles)
    return tiles
  }

  /**
   * Create and add Sprite with given key and frame to scene
   */
  sprite(
    x: number,
    y: number,
    textureKey: string,
    frameKey = '__base',
    width?: number,
    height?: number
  ) {
    const gameObject = this.creator.sprite(
      x,
      y,
      textureKey,
      frameKey,
      width,
      height
    )

    this.register(gameObject)
    return gameObject
  }
}
