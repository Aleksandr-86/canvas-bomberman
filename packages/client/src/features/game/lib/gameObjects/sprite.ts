import { type Texture } from '../texture'
import { BaseGameObject } from './baseGameObject'
import { type Animation } from '../animation'

export class Sprite extends BaseGameObject {
  public scaleX = 1
  public scaleY = 1
  public skewX = 0
  public skewY = 0
  public translateX = 0
  public translateY = 0
  public rotation = 0
  public width
  public height
  public opacity = 1
  public shouldDestroy = false
  public animations = new Map<string, Animation>()

  constructor(
    public x: number,
    public y: number,
    public texture: Texture,
    public frame: keyof typeof texture.frames = '__base',
    public z = 0
  ) {
    super()
    const { width, height } = texture.frames[frame]

    this.width = width
    this.height = height
  }

  addAnimation(anims: Record<string, Animation>) {
    Object.entries(anims).forEach(([key, anim]) => {
      this.animations.set(key, anim)
    })
  }

  destroy() {
    this.shouldDestroy = true
  }

  exec(ctx: CanvasRenderingContext2D) {
    const { texture, frame, x, y, width, height } = this

    const {
      x: sx,
      y: sy,
      width: sWidth,
      height: sHeight,
    } = texture.frames[frame]

    ctx.save()
    ctx.globalAlpha = this.opacity
    ctx.drawImage(texture.source, sx, sy, sWidth, sHeight, x, y, width, height)
    ctx.restore()
  }
}
