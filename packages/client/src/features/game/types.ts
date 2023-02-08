export enum Kind {
  Empty,
  WallHard,
  WallSoft,
  Bomb,
  Player,
}

export type FieldState = Kind[]
