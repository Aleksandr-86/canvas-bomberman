export const Kind = {
  Empty: 0,
  WallHard: 1,
  WallSoft: 2,
  Player: 3,
  Bomb: 4,
} as const
export type Kind = typeof Kind[keyof typeof Kind]
export type FieldState = Kind[][]
