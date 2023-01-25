import { Kind } from './types'
import { CELL_WIDTH } from './const'
import { type Drawable, Textures, Sprite } from './lib'
import { Tilemap } from './lib/gameObjects/tilemap'
import { TiledSprite } from './lib/gameObjects'
import grassTilesetX2 from '../../assets/images/x2tilesetGrass.png'
import grassTilesetX2Atlas from '../../assets/images/x2tilesetGrass.json'

type TileContstructor = (x: number, y: number) => Drawable
type KindToTile = Partial<Record<Kind, TileContstructor>>

const img = new Image()
img.src = grassTilesetX2
const GrassTilemap = new Tilemap(img, grassTilesetX2Atlas)

const tiles: KindToTile = {
  [Kind.Empty]: (x, y) =>
    new TiledSprite(
      GrassTilemap.get('grass1'),
      x * CELL_WIDTH,
      y * CELL_WIDTH,
      0,
      CELL_WIDTH,
      CELL_WIDTH
    ),
  [Kind.Player]: (x, y) =>
    new Sprite(
      Textures.White,
      x * CELL_WIDTH,
      y * CELL_WIDTH,
      1,
      CELL_WIDTH,
      CELL_WIDTH
    ),
  [Kind.WallHard]: (x, y) =>
    new TiledSprite(
      GrassTilemap.get('wall1'),
      x * CELL_WIDTH,
      y * CELL_WIDTH,
      4,
      CELL_WIDTH,
      CELL_WIDTH
    ),
  [Kind.WallSoft]: (x, y) =>
    new TiledSprite(
      GrassTilemap.get('wall3'),
      x * CELL_WIDTH,
      y * CELL_WIDTH,
      3,
      CELL_WIDTH,
      CELL_WIDTH
    ),
  [Kind.Bomb]: (x, y) =>
    new TiledSprite(
      GrassTilemap.get('grass3'),
      x * CELL_WIDTH,
      y * CELL_WIDTH,
      1,
      CELL_WIDTH,
      CELL_WIDTH
    ),
}

export function createTiles(map: Kind[][]) {
  const ents = []
  for (let colIdx = 0; colIdx < map.length; ++colIdx) {
    const row = map[colIdx]
    for (let rowIdx = 0; rowIdx < row.length; ++rowIdx) {
      const value = row[rowIdx]
      const construct = tiles[value]
      if (construct) {
        ents.push(construct(rowIdx, colIdx))
      }
    }
  }
  return ents
}
