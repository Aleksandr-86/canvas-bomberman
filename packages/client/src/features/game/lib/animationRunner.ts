import { type Sprite } from './gameObjects'

export class AnimationRunner {
  run(sprite: Sprite, key: string) {
    const anim = sprite.animations.get(key)

    if (anim) {
      anim.advance()
      sprite.frame = anim.currentFrame
    }
  }

  reset(sprite: Sprite, key: string) {
    const anim = sprite.animations.get(key)

    if (anim) {
      anim.reset()
      sprite.frame = anim.currentFrame
    }
  }
}
