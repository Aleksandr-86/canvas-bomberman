import { type SceneContext } from '../sceneContext'
import { type Texture } from '../texture'
import { Rect } from './rect'
import { Sprite } from './sprite'

type TextureFrame = `${string}:${string}:${number}`

type TileGridConfig<C extends number = number> = {
  grid: C[]
  gridWidth: number
  cellSize: number
  cells: Record<C, TextureFrame | Omit<string, TextureFrame>>
}

export class GameObjectCreator {
  constructor(private scene: SceneContext) {}

  rect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    z = 0
  ) {
    const gameObject = new Rect(x, y, width, height, color, z)

    return gameObject
  }

  sprite(
    x: number,
    y: number,
    textureKey: string,
    frameKey = '__base',
    width?: number,
    height?: number,
    z = 0
  ) {
    const texture =
      this.scene.textures.get(textureKey) ||
      (this.scene.textures.get('white') as Texture)

    const gameObject = new Sprite(x, y, texture, frameKey, z)

    if (width) gameObject.width = width
    if (height) gameObject.height = height

    return gameObject
  }

  tileGrid({ grid, gridWidth, cellSize, cells }: TileGridConfig) {
    const tiles = []

    for (let i = 0; i < grid.length; ++i) {
      const col = i % gridWidth
      const row = Math.trunc(i / gridWidth)
      const entry = cells[grid[i]]

      const [textureKey, frameKey, spriteDepth] = entry.split(':')
      const texture = this.scene.textures.get(textureKey)
      if (!texture) continue

      const sprite = new Sprite(
        col * cellSize,
        row * cellSize,
        texture,
        frameKey,
        Number(spriteDepth)
      )

      sprite.width = cellSize
      sprite.height = cellSize
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

  private register(object: Sprite[]) {
    this.scene.displayList.concat(object)
  }

  /**
   * Create and add rectangle to scene
   */
  rect(
    x: number,
    y: number,
    width: number,
    height: number,
    fill: string,
    z = 0
  ) {
    const gameObject = this.creator.rect(x, y, width, height, fill, z)
    this.register([gameObject] as unknown as Sprite[])
    return gameObject
  }

  /**
   * Create and add grid of tiles to scene
   *
   * From 1D array (row-major order) of tile kinds and mapping of tile kinds to colon-separated string describing texture and its frame
   *
   * If texture in mapping not found, cell is skipped
   *
   * `<textureKey>:<textureFrameKey>:<spriteDepth>`
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
    height?: number,
    z = 0
  ) {
    const gameObject = this.creator.sprite(
      x,
      y,
      textureKey,
      frameKey,
      width,
      height,
      z
    )

    this.register([gameObject])
    return gameObject
  }
}
