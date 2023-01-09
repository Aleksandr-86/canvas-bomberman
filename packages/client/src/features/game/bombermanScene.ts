import { Scene } from './lib/scene'
import { SceneContext } from './lib/game'
import { Rect } from './lib/game-objects'
import { renderField } from './utils/renderField'
import { intersect } from './utils/intersect'
import { debounce } from './utils/debounce'

const PLAYER_VELOCITY = 200

const addWithCd = debounce(
  (scene, player) =>
    scene.add(new Rect(player.x, player.y, player.width, player.height, 'red')),
  1000
)

export const bombermanScene = {
  create: (scene: Scene) => {
    const field = renderField()
    const player = new Rect(50, 50, 30, 30, '#dada22')

    field.forEach(ent => scene.add(ent))
    scene.add(player)
  },
  update: ({ kbd, scene, delta }: SceneContext) => {
    const player = scene.objects.find(obj => obj?.color === '#dada22')
    const hardWalls = scene.objects.filter(obj => obj?.color === '#222222')

    if (!player) return

    if (kbd.right) {
      const newPos = player.x + PLAYER_VELOCITY * delta
      if (
        !hardWalls.some(wall =>
          intersect(
            wall,
            new Rect(newPos + 2, player.y, player.width, player.height)
          )
        )
      ) {
        player.x = newPos
      } else {
        player.x -= 2
      }
    }
    if (kbd.left) {
      const newPos = player.x - PLAYER_VELOCITY * delta
      if (
        !hardWalls.some(wall =>
          intersect(
            wall,
            new Rect(newPos + 2, player.y, player.width, player.height)
          )
        )
      ) {
        player.x = newPos
      } else {
        player.x += 2
      }
    }
    if (kbd.up) {
      const newPos = player.y - PLAYER_VELOCITY * delta
      if (
        hardWalls.some(wall =>
          intersect(
            wall,
            new Rect(player.x, newPos + 2, player.width, player.height)
          )
        )
      ) {
        player.y = newPos
      } else {
        player.y += 2
      }
    }
    if (kbd.down) {
      const newPos = player.y + PLAYER_VELOCITY * delta
      if (
        hardWalls.some(wall =>
          intersect(
            wall,
            new Rect(player.x, newPos + 2, player.width, player.height)
          )
        )
      ) {
        player.y = newPos
      } else {
        player.y -= 2
      }
    }

    if (kbd.space) addWithCd(scene, player)
  },
}
