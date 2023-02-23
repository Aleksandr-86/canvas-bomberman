export class Animation {
  public elapsed = 0
  public frameTime

  constructor(
    public frames: string[],
    public duration: number = 1000,
    public currentIndex = 0
  ) {
    this.frameTime = this.duration / this.frames.length - 1
  }

  get lastIndex() {
    return this.frames.length - 1
  }

  get isFinished() {
    return this.currentIndex === this.lastIndex
  }

  advance(delta: number) {
    // add frameTime to the end to account for last frame playing
    const lastFrameDone =
      this.elapsed <= this.elapsed + this.frameTime &&
      this.elapsed > this.duration
    this.elapsed += delta * 1000

    if (this.isFinished && lastFrameDone) {
      this.currentIndex = 0
      this.elapsed = 0
    } else {
      const frameIndex = Math.min(
        Math.floor(this.elapsed / this.frameTime),
        this.lastIndex
      )
      this.currentIndex = frameIndex
    }
  }

  reset() {
    this.currentIndex = 0
  }

  get currentFrame() {
    return this.frames[this.currentIndex]
  }
}
