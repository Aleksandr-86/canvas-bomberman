import { CELL_WIDTH, INITIAL_FIELD_STATE } from './const'
import { Rect, Sprite } from './lib'
import { type SceneContext, type Scene } from './lib/scene'
import { Textures } from './lib/textures'
import { type KindToTile, tilemap } from './lib/tilemap'
import { Kind } from './types'

const PLAYER_VELOCITY = CELL_WIDTH

const tiles: KindToTile = {
  [Kind.Empty]: (x, y) =>
    new Rect('green', x * CELL_WIDTH, y * CELL_WIDTH, CELL_WIDTH, CELL_WIDTH),
  [Kind.Player]: (x, y) =>
    new Sprite(
      Textures.White,
      x * CELL_WIDTH,
      y * CELL_WIDTH,
      CELL_WIDTH,
      CELL_WIDTH
    ),
  [Kind.WallHard]: (x, y) =>
    new Rect('blue', x * CELL_WIDTH, y * CELL_WIDTH, CELL_WIDTH, CELL_WIDTH),
}

export const bombermanScene = {
  create: (scene: Scene) => {
    const player = new Sprite(
      Textures.White,
      CELL_WIDTH,
      CELL_WIDTH,
      CELL_WIDTH,
      CELL_WIDTH,
      'player'
    )
    const map = tilemap(INITIAL_FIELD_STATE, tiles)

    map.forEach(o => scene.add(o))

    scene.add(player)
  },
  update: ({ kbd, scene, delta }: SceneContext) => {
    const player = scene.getById('player')

    if (kbd.left) player.x -= PLAYER_VELOCITY * delta * 4
    if (kbd.right) player.x += PLAYER_VELOCITY * delta * 4
    if (kbd.up) player.y -= PLAYER_VELOCITY * delta * 4
    if (kbd.down) player.y += PLAYER_VELOCITY * delta * 4
  },
}
