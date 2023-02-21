export class Animation {
  constructor(
    public frames: string[],
    public duration: number = 1000,
    public currentIndex = 0
  ) {}

  advance() {
    this.currentIndex =
      this.currentIndex === this.frames.length - 1 ? 0 : this.currentIndex + 1
  }

  reset() {
    this.currentIndex = 0
  }

  get currentFrame() {
    return this.frames[this.currentIndex]
  }
}
