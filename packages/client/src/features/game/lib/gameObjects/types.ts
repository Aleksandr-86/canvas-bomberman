export interface Drawable {
  id: string
  x: number
  y: number
  z: number
  width: number
  height: number
  exec: (ctx: CanvasRenderingContext2D, delta: number) => void
}
