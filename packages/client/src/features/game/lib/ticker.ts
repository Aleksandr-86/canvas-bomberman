type TickCallback = (delta: number) => void

export class Ticker {
  public delta = 0
  public prevTime = 0
  public now = 0
  public frameCount = 0
  private rafId = 0
  private onTickCallbacks: TickCallback[] = []

  start() {
    this.tick()
  }

  stop() {
    if (this.rafId) cancelAnimationFrame(this.rafId)
  }

  add(cb: TickCallback) {
    this.onTickCallbacks.push(cb)
  }

  tick = () => {
    this.rafId = requestAnimationFrame(this.tick)

    const now = performance.now()
    this.delta = (now - this.prevTime) / 1000
    this.prevTime = now
    this.frameCount += 1

    this.onTickCallbacks.forEach(cb => cb(this.delta))
  }
}
