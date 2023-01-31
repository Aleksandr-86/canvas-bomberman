type Rect = {
  x: number
  y: number
  width: number
  height: number
}

export class Texture {
  public frames: Record<string, Rect> = {}

  constructor(
    public key: string,
    public source: HTMLImageElement,
    public width = source.width,
    public height = source.height
  ) {
    this.frames.__base = { x: 0, y: 0, width, height }
  }

  public addFrame(key: string, frame: Rect) {
    this.frames[key] = frame
  }
}
