import { type FrameData } from '../ticker'

export interface Position {
  x: number
  y: number
}

export interface Depth {
  z: number
}

export interface Transform {
  scaleX: number
  scaleY: number
  skewX: number
  skewY: number
  translateX: number
  translateY: number
}

export interface Drawable {
  exec: (ctx: CanvasRenderingContext2D, time: FrameData) => void
}

export type SceneObject = Drawable & Depth & Position
