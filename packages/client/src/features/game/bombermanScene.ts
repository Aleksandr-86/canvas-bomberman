import {
  BOMB_FUSE,
  CELL_WIDTH,
  Depth,
  EMPTY_FIELD,
  ENEMY_ANIMATION_DURATION,
  ENEMY_COUNT,
  GRID_WIDTH,
  PLAYER_ANIMATION_DURATION,
  PLAYER_STARTING_POSITION,
  PLAYER_VELOCITY,
} from './const'
import { SceneObject, Sprite } from './lib/gameObjects'
import { type SceneConfig } from './lib'
import { Kind } from './types'
import { Point, type PointLike } from './utils/point'
import { gameStarted } from './gameActions'
import nesBomberman from '../../assets/images/nesBomberman5xTransparent.png'
import nesBombermanFrames from '../../assets/images/nesBomberman5x.json'
import { createSoftWalls } from './createSoftWalls'
import { clamp, delay } from './utils'
import { Animation } from './lib/animation'
import { adjacentWalls } from './adjacentWalls'
import { Movement } from './movement'

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

const explosionAnimations = {
  center: new Animation([
    'explosionCenter1',
    'explosionCenter2',
    'explosionCenter3',
    'explosionCenter4',
  ]),
  tipTop: new Animation([
    'explosionTipTop1',
    'explosionTipTop2',
    'explosionTipTop3',
    'explosionTipTop4',
  ]),
  tipBottom: new Animation([
    'explosionTipBottom1',
    'explosionTipBottom2',
    'explosionTipBottom3',
    'explosionTipBottom4',
  ]),
  tipLeft: new Animation([
    'explosionTipLeft1',
    'explosionTipLeft2',
    'explosionTipLeft3',
    'explosionTipLeft4',
  ]),
  tipRight: new Animation([
    'explosionTipRight1',
    'explosionTipRight2',
    'explosionTipRight3',
    'explosionTipRight4',
  ]),
  top: new Animation([
    'explosionTop1',
    'explosionTop2',
    'explosionTop3',
    'explosionTop4',
  ]),
  bottom: new Animation([
    'explosionBottom1',
    'explosionBottom2',
    'explosionBottom3',
    'explosionBottom4',
  ]),
  left: new Animation([
    'explosionLeft1',
    'explosionLeft2',
    'explosionLeft3',
    'explosionLeft4',
  ]),
  right: new Animation([
    'explosionRight1',
    'explosionRight2',
    'explosionRight3',
    'explosionRight4',
  ]),
}

const nearestCell = (p: PointLike) =>
  Point.from(p).apply(c => Math.round(c / CELL_WIDTH) * CELL_WIDTH)
const toCanvasSpace = (p: PointLike) => Point.from(p).scale(CELL_WIDTH)
const filterCollidable = (list: SceneObject[]) =>
  list.filter(
    obj =>
      obj instanceof Sprite &&
      (obj.frame === 'wallHard' ||
        obj.frame === 'wallSoft' ||
        obj.frame === 'bomb1')
  )

let player: Sprite
let playerDead = false
const enemies = new Map<Sprite, Movement>()
let backgroundTiles: Sprite[] = []
let softWalls: Sprite[] = []

const vel = PLAYER_VELOCITY

let newBomb: Sprite | null = null

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
      left: new Animation(
        ['bombermanLeft1', 'bombermanLeft2', 'bombermanLeft3'],
        PLAYER_ANIMATION_DURATION
      ),
      right: new Animation(
        ['bombermanRight1', 'bombermanRight2', 'bombermanRight3'],
        PLAYER_ANIMATION_DURATION
      ),
      up: new Animation(
        ['bombermanUp1', 'bombermanUp2', 'bombermanUp3'],
        PLAYER_ANIMATION_DURATION
      ),
      down: new Animation(
        ['bombermanDown1', 'bombermanDown2', 'bombermanDown3'],
        PLAYER_ANIMATION_DURATION
      ),
      die: new Animation(
        [
          'bombermanDead1',
          'bombermanDead2',
          'bombermanDead3',
          'bombermanDead4',
          'bombermanDead5',
          'bombermanDead6',
          'bombermanDead7',
          'empty',
        ],
        PLAYER_ANIMATION_DURATION * 0.33
      ),
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

    const freeCells = backgroundTiles
      .concat(softWalls)
      .filter(
        obj =>
          'frame' in obj && obj.frame !== 'wallSoft' && obj.frame !== 'wallHard'
      )

    const dropletAnimations = {
      left: new Animation(
        ['droplet1', 'droplet2', 'droplet3'],
        ENEMY_ANIMATION_DURATION
      ),
      right: new Animation(
        ['droplet4', 'droplet5', 'droplet6'],
        ENEMY_ANIMATION_DURATION
      ),
      center: new Animation(['droplet7', 'droplet1'], ENEMY_ANIMATION_DURATION),
      die: new Animation(
        ['dieBlue1', 'dieBlue2', 'dieBlue3', 'dieBlue4'],
        ENEMY_ANIMATION_DURATION
      ),
    }

    for (const { x, y } of freeCells) {
      const belowMaxEnemies = enemies.entries.length < ENEMY_COUNT

      if (Math.random() * 101 < 5 && belowMaxEnemies && x >= 160 && y >= 160) {
        const sprite = scene.add.sprite(
          x,
          y,
          'nesBomberman',
          'droplet1',
          CELL_WIDTH,
          CELL_WIDTH,
          Depth.Enemy
        )

        sprite.addAnimation(dropletAnimations)

        const criteria = ({ frame }: Sprite) =>
          frame !== 'wallHard' &&
          frame !== 'wallSoft' &&
          !frame.startsWith('droplet')
      }
    }

    // bind player reference to camera
    scene.camera.bind(player)

    // cache walls for collision detection
    shouldCollideWith = filterCollidable(scene.displayList)

    gameStarted()
  },
  update: (scene, frame, kbd) => {
    const velocity = new Point()

    if (!playerDead) {
      if (kbd.left) {
        velocity.x -= 1
        scene.anims.run(player, 'left', frame.delta)
      }
      if (kbd.right) {
        velocity.x += 1
        scene.anims.run(player, 'right', frame.delta)
      }
      if (kbd.up) {
        velocity.y -= 1
        scene.anims.run(player, 'up', frame.delta)
      }
      if (kbd.down) {
        velocity.y += 1
        scene.anims.run(player, 'down', frame.delta)
      }

      if (kbd.space && !newBomb) {
        const currentLocation = Point.from(player)

        newBomb = scene.add.sprite(
          Math.round(currentLocation.x / CELL_WIDTH) * CELL_WIDTH,
          Math.round(currentLocation.y / CELL_WIDTH) * CELL_WIDTH,
          'nesBomberman',
          'bomb1',
          CELL_WIDTH,
          CELL_WIDTH,
          Depth.Bomb
        )

        newBomb.addAnimation({
          pulse: new Animation(['bomb1', 'bomb2', 'bomb3'], 800),
        })

        delay(BOMB_FUSE).then(() => {
          const currentCell = nearestCell(currentLocation)
          const explosions = adjacentWalls(currentCell, 2).map(({ x, y }) => {
            const explosion = scene.add.sprite(
              x,
              y,
              'nesBomberman',
              'explosionCenter1',
              CELL_WIDTH,
              CELL_WIDTH,
              Depth.Destructable
            )
            explosion.addAnimation(explosionAnimations)
            return explosion
          })

          newBomb?.destroy()
          newBomb = null

          delay(800).then(() => {
            for (const explosion of explosions) {
              scene.anims.run(explosion, 'center', 0.16, true)
              explosion.destroy()
            }
          })
        })
      }
    }

    if (newBomb) {
      scene.anims.run(newBomb, 'pulse', frame.delta)
    }

    const nextPlayerPosition = Point.from(player).add(
      velocity.scale(vel * frame.delta)
    )

    const resolved = resolveCollision(
      selectNearbyTiles(shouldCollideWith, nextPlayerPosition),
      nextPlayerPosition
    )

    for (const [enemy, movement] of enemies) {
      const playerKilled = checkCircleCollision(enemy, player)

      if (playerKilled) {
        playerDead = true
        scene.anims.run(player, 'die', frame.delta, true)
      }

      enemies.forEach(e => scene.anims.run(enemy, 'left', frame.delta))
    }

    if (!kbd.left && !kbd.right && !kbd.up && !kbd.down && !playerDead) {
      player.frame = 'bombermanDown2'
    }

    player.setPosition(resolved)
  },
}

function checkCircleCollision(c1: PointLike, c2: PointLike) {
  return (c1.x - c2.x) ** 2 + (c1.y - c2.y) ** 2 <= CELL_WIDTH ** 2
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

function selectNearbyTiles(tiles: PointLike[], center: Point) {
  const currentCell = nearestCell(center)

  return tiles.filter(
    ({ x, y }) =>
      x >= currentCell.x - CELL_WIDTH &&
      x <= currentCell.x + CELL_WIDTH &&
      y >= currentCell.y - CELL_WIDTH &&
      y <= currentCell.y + CELL_WIDTH
  )
}
