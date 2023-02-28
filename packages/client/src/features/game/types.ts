export enum Kind {
  Empty,
  WallHard,
  WallSoft,
  Bomb,
  Player,
}

export type FieldState = Kind[]

export type ExplosionOrientation = `explosion${
  | 'TipLeft'
  | 'Left'
  | 'TipRight'
  | 'Right'
  | 'TipUp'
  | 'Up'
  | 'TipDown'
  | 'Down'
  | 'Center'}`
