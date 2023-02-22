import {
  BOMB_FUSE,
  CELL_WIDTH,
  Depth,
  EMPTY_FIELD,
  GRID_WIDTH,
  PLAYER_STARTING_POSITION,
} from './const'
import { SceneObject, Sprite } from './lib/gameObjects'
import { type SceneConfig } from './lib'
import { Kind } from './types'
import { Point, type PointLike } from './utils/point'
import { startGame } from './gameActions'
import nesBomberman from '../../assets/images/nesBomberman5xTransparent.png'
import nesBombermanFrames from '../../assets/images/nesBomberman5x.json'
import { createSoftWalls } from './createSoftWalls'
import { clamp, delay } from './utils'
import { Animation } from './lib/animation'
import { adjacentWalls } from './adjacentWalls'
import { randomInRange } from './utils/randomInRange'

/**
 * Convert atlas entries to canvas space
 */
function atlasToCanvasSpace({ cellSize, entries }: typeof nesBombermanFrames) {
  return Object.fromEntries(
    Object.entries(entries).map(([key, { x, y }]) => [
      key,
      {
        x: x * cellSize,
        y: y * cellSize,
        width: cellSize,
        height: cellSize,
      },
    ])
  )
}

const toCanvasSpace = (p: PointLike) => new Point(p.x, p.y).scale(CELL_WIDTH)
const filterCollidable = (list: SceneObject[]) =>
  list.filter(
    obj =>
      obj instanceof Sprite &&
      (obj.frame === 'wallHard' ||
        obj.frame === 'wallSoft' ||
        obj.frame === 'bomb1')
  )

let player: Sprite
let backgroundTiles: Sprite[]
let softWalls: Sprite[]
let enemy: Sprite

const vel = CELL_WIDTH * 4

let newBomb: Sprite

let shouldCollideWith: SceneObject[]

export const bombermanScene: SceneConfig = {
  preload: load => {
    load.image('nesBomberman', nesBomberman, texture => {
      const frames = atlasToCanvasSpace(nesBombermanFrames)

      texture.addFrame(frames)
    })
  },
  create: scene => {
    backgroundTiles = scene.add.tileGrid({
      grid: EMPTY_FIELD,
      cellSize: CELL_WIDTH,
      gridWidth: GRID_WIDTH,
      cells: {
        [Kind.Empty]: `nesBomberman:empty:${Depth.Ground}`,
        [Kind.WallHard]: `nesBomberman:wallHard:${Depth.Ground}`,
      },
    })

    player = scene.add.sprite(
      PLAYER_STARTING_POSITION.x * CELL_WIDTH,
      PLAYER_STARTING_POSITION.y * CELL_WIDTH,
      'nesBomberman',
      'bombermanDown1',
      CELL_WIDTH,
      CELL_WIDTH,
      Depth.Player
    )

    player.addAnimation({
      left: new Animation([
        'bombermanLeft1',
        'bombermanLeft2',
        'bombermanLeft3',
      ]),
      right: new Animation([
        'bombermanRight1',
        'bombermanRight2',
        'bombermanRight3',
      ]),
      up: new Animation(['bombermanUp1', 'bombermanUp2', 'bombermanUp3']),
      down: new Animation([
        'bombermanDown1',
        'bombermanDown2',
        'bombermanDown3',
      ]),
    })

    softWalls = createSoftWalls(EMPTY_FIELD, new Point(1, 1)).map(point => {
      const { x, y } = toCanvasSpace(point)
      const sprite = scene.add.sprite(
        x,
        y,
        'nesBomberman',
        'wallSoft',
        CELL_WIDTH,
        CELL_WIDTH,
        Depth.Destructable
      )

      return sprite
    })

    // bind player reference to camera
    scene.camera.bind(player)

    shouldCollideWith = filterCollidable(scene.displayList)

    startGame()
  },
  update: (scene, frame, kbd) => {
    if (!enemy) {
      const lo = backgroundTiles
        .concat(softWalls)
        // @ts-ignore-next
        .filter(({ frame }) => frame === 'empty' && frame !== 'wallSoft')

      const sel = lo[randomInRange(0, lo.length - 1)]

      enemy = scene.add.sprite(
        sel.x,
        sel.y,
        'nesBomberman',
        'droplet1',
        CELL_WIDTH,
        CELL_WIDTH,
        Depth.Enemy
      )

      setInterval(() => {
        const pl = new Point(enemy.x, enemy.y)

        const left = pl.add(new Point(-1, 0).scale(CELL_WIDTH))
        const right = pl.add(new Point(1, 0).scale(CELL_WIDTH))
        const up = pl.add(new Point(0, -1).scale(CELL_WIDTH))
        const down = pl.add(new Point(0, 1).scale(CELL_WIDTH))

        const newpos = [left, right, up, down][randomInRange(0, 3)]
        const movementDuration = 2000

        const lastTime = performance.now()
        setInterval(() => {
          const co = performance.now() - lastTime
          const percent = (movementDuration / 100) * co
          const newpos2 = Point.lerp(pl, newpos, percent)

          enemy.setPosition(newpos2)
        }, 50)
      }, 800)
    }

    const velocity = new Point()

    if (kbd.left) {
      velocity.x -= 1
      if (frame.frameCount % 5 === 0) {
        scene.anims.run(player, 'left')
      }
    }
    if (kbd.right) {
      velocity.x += 1
      if (frame.frameCount % 5 === 0) {
        scene.anims.run(player, 'right')
      }
    }
    if (kbd.up) {
      velocity.y -= 1
      if (frame.frameCount % 5 === 0) {
        scene.anims.run(player, 'up')
      }
    }
    if (kbd.down) {
      velocity.y += 1
      if (frame.frameCount % 5 === 0) {
        scene.anims.run(player, 'down')
      }
    }

    if (kbd.space) {
      if (frame.frameCount % 10 !== 0) return

      const currentLocation = new Point(player.x, player.y)

      const localRef = (newBomb = scene.add.sprite(
        Math.round(currentLocation.x / CELL_WIDTH) * CELL_WIDTH,
        Math.round(currentLocation.y / CELL_WIDTH) * CELL_WIDTH,
        'nesBomberman',
        'bomb1',
        CELL_WIDTH,
        CELL_WIDTH,
        Depth.Bomb
      ))

      newBomb.addAnimation({
        pulse: new Animation(['bomb1', 'bomb2', 'bomb3']),
      })

      if (frame.frameCount % 10 === 0) {
        scene.anims.run(newBomb, 'pulse')
      }

      delay(BOMB_FUSE).then(() => {
        const currentCell = new Point(
          currentLocation.x,
          currentLocation.y
        ).apply(c => Math.round(c / CELL_WIDTH) * CELL_WIDTH)
        const walls = adjacentWalls(currentCell, 2).map(({ x, y }) =>
          scene.add.sprite(
            x,
            y,
            'nesBomberman',
            'explosionCenter1',
            CELL_WIDTH,
            CELL_WIDTH,
            1
          )
        )

        delay(800).then(() => walls.forEach(w => w.destroy()))

        localRef.destroy()
      })
    }

    if (!kbd.left && !kbd.right && !kbd.up && !kbd.down) {
      player.frame = 'bombermanDown1'
    }

    if (newBomb && frame.frameCount % 17 === 0) {
      scene.anims.run(newBomb, 'pulse')
    }

    const enemies = scene.displayList.filter(
      // @ts-ignore-next
      ({ frame }) => frame === 'droplet1'
    )

    if (checkEnemyCollision(enemies, player)) {
      console.log('hit an enemy')
    }

    const newPos = new Point(player.x, player.y).add(
      velocity.scale(vel * frame.delta)
    )

    const resolved = resolveCollision(
      selectNearbyTiles(shouldCollideWith, newPos),
      newPos
    )

    player.setPosition(resolved)
  },
}

function checkEnemyCollision(colliders: PointLike[], player: PointLike) {
  return colliders.some(c => {
    return (player.x - c.x) ** 2 + (player.y - c.y) ** 2 <= CELL_WIDTH ** 2
  })
}

function resolveCollision(colliders: PointLike[], playerOrigin: Point) {
  const radius = new Point(CELL_WIDTH / 2, CELL_WIDTH / 2)

  const playerCenter = playerOrigin.add(radius)

  const playerRadius = CELL_WIDTH / 2

  const res = playerCenter.copy()
  for (const { x, y } of colliders) {
    const nearestPoint = new Point(
      clamp(playerCenter.x, x, x + CELL_WIDTH),
      clamp(playerCenter.y, y, y + CELL_WIDTH)
    )

    const rayToNearestPoint = nearestPoint.sub(playerCenter)

    const overlap = Number.isNaN(rayToNearestPoint.mag())
      ? 0
      : playerRadius - rayToNearestPoint.mag()

    if (overlap > 0) {
      const normal = rayToNearestPoint.normalize()
      res.x = res.x - normal.x * overlap
      res.y = res.y - normal.y * overlap
    }
  }

  return res.sub(radius)
}

function selectNearbyTiles(tiles: PointLike[], player: Point) {
  const currentCell = player.apply(c => Math.trunc(c / CELL_WIDTH) * CELL_WIDTH)

  return tiles.filter(
    ({ x, y }) =>
      x >= currentCell.x - CELL_WIDTH &&
      x <= currentCell.x + CELL_WIDTH &&
      y >= currentCell.y - CELL_WIDTH &&
      y <= currentCell.y + CELL_WIDTH
  )
}
