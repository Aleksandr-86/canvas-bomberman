import { Kind } from '../types'
import { Drawable } from './gameObjects'

type TileContstructor = (x: number, y: number) => Drawable
export type KindToTile = Partial<Record<Kind, TileContstructor>>

export function tilemap(map: Kind[][], tiles: KindToTile) {
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
