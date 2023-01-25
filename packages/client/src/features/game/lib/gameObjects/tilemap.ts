type Frame = {
  origin: { x: number; y: number }
  width: number
}

type Frames = Record<string, Frame>

export type TiledTexture = {
  texture: HTMLImageElement
  frame: Frame
}

export class Tilemap<F extends Frames> {
  constructor(private texture: HTMLImageElement, private frames: F) {}

  get(key: keyof F): TiledTexture {
    return { texture: this.texture, frame: this.frames[key] }
  }
}
