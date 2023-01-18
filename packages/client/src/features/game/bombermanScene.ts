import { Sprite } from './lib'
import { type SceneContext, type Scene } from './lib/scene'
import { Textures } from './lib/textures'

const PLAYER_VELOCITY = 102

export const bombermanScene = {
  create: (scene: Scene) => {
    const player = new Sprite(Textures.Black, 20, 20, 40, 40, 'player')

    scene.add(player)
  },
  update: ({ kbd, scene, delta }: SceneContext) => {
    const player = scene.getById('player')
    if (!player) return

    if (kbd.left) player.x -= PLAYER_VELOCITY * delta
    if (kbd.right) player.x += PLAYER_VELOCITY * delta
    if (kbd.up) player.y -= PLAYER_VELOCITY * delta
    if (kbd.down) player.y += PLAYER_VELOCITY * delta
  },
}
