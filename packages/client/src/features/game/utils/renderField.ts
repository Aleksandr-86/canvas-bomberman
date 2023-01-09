import { Rect } from '../lib/game-objects'

enum Block {
  Empty = 0,
  WallHard = 1,
  WallSoft = 2,
  Player = 3,
  Bomb = 4,
}

const Colors = {
  Empty: '#33dd00',
  WallHard: '#222222',
  WallSoft: '#999999',
  Player: '#dada22',
  Bomb: '#ff2222',
}

const CELL_WIDTH = 40

const field = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

export const renderField = () => {
  const ents = []

  for (let ri = 0; ri < field.length; ri++) {
    const row = field[ri]
    for (let ci = 0; ci < row.length; ci++) {
      const block = row[ci]
      switch (block) {
        case Block.Empty:
          ents.push(
            new Rect(
              ci * CELL_WIDTH,
              ri * CELL_WIDTH,
              CELL_WIDTH,
              CELL_WIDTH,
              Colors.Empty
            )
          )
          break
        case Block.WallHard:
          ents.push(
            new Rect(
              ci * CELL_WIDTH,
              ri * CELL_WIDTH,
              CELL_WIDTH,
              CELL_WIDTH,
              Colors.WallHard
            )
          )
          break
        case Block.WallSoft:
          ents.push(
            new Rect(
              ci * CELL_WIDTH,
              ri * CELL_WIDTH,
              CELL_WIDTH,
              CELL_WIDTH,
              Colors.WallSoft
            )
          )
          break

        default:
          throw new Error('no such block')
          break
      }
    }
  }
  return ents
}
