export type Frame = {
  x: number
  y: number
  width: number
  height: number
}

type FrameEntries = Record<string, Frame>

export class Texture {
  public frames: Record<string, Frame> = {}

  constructor(
    public key: string,
    public source: HTMLImageElement,
    public width = source.width,
    public height = source.height
  ) {
    this.frames.__base = { x: 0, y: 0, width, height }
  }

  public addFrame(entries: FrameEntries) {
    this.frames = {
      ...this.frames,
      ...entries,
    }
  }
}
