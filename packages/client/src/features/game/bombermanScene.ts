import {
  BOMB_FUSE,
  CELL_WIDTH,
  Depth,
  EMPTY_FIELD,
  MAX_ENEMY_COUNT,
  GRID_WIDTH,
  PLAYER_STARTING_POSITION,
  PLAYER_VELOCITY,
  ENEMY_SPAWN_OFFSET,
  SOFT_WALL_SPAWN_OFFSET,
  CELL_DIMENSIONS,
  EXPLOSION_DURATION,
  BUFF_CHANCE,
  Points,
} from './const'
import { Sprite } from './lib/gameObjects'
import { type SceneConfig } from './lib'
import { Kind } from './types'
import {
  Point,
  type PointLike,
  delay,
  withChance,
  randomInRange,
} from './utils'
import { gameStarted, pointsAdded } from './gameActions'
import nesBomberman from '../../assets/images/nesBomberman5xTransparent.png'
import nesBombermanFrames from '../../assets/images/nesBomberman5x.json'
import { generateWallPositions } from './createSoftWalls'
import { resolveExplosion } from './resolveExplosionAround'
import { circleCircleCollision, rectCircleResolve } from './collision'
import { nearestCell, selectNearbyCells, scaleAtlasFrames } from './gridHelpers'
import {
  makeBomb,
  makeBuff,
  makeDoor,
  makeEnemy,
  makeExplosion,
  makePlayer,
  makeSoftWall,
} from './spriteHelpers'
import { SpriteList } from './spriteList'
import { SceneContext } from './lib/sceneContext'
import { EnemyController } from './enemyController'

type GameState = {
  player: {
    ref: null | Sprite
    direction: Point
    playerDead: boolean
    lastDirection: 'left' | 'right' | 'up' | 'down'
    bombLimit: number
    buffs: {
      bombAmountUp: boolean
      bombRangeUp: boolean
      playerSpeedUp: boolean
    }
  }
  field: {
    enemies: SpriteList
    backgroundTiles: SpriteList
    softWalls: SpriteList
    bombs: SpriteList
    explosions: SpriteList
    buffs: SpriteList
  }
}

const state: GameState = {
  player: {
    ref: null,
    direction: new Point(),
    playerDead: false,
    lastDirection: 'down',
    bombLimit: 1,
    buffs: {
      bombAmountUp: false,
      bombRangeUp: false,
      playerSpeedUp: false,
    },
  },
  field: {
    enemies: new SpriteList(),
    backgroundTiles: new SpriteList(),
    softWalls: new SpriteList(),
    explosions: new SpriteList(),
    bombs: new SpriteList(),
    buffs: new SpriteList(),
  },
}

// let controller
let lastBombPlacementTime = performance.now()
const collidableCells = new SpriteList()

export const bombermanScene: SceneConfig = {
  preload: load => {
    load.image('nesBomberman', nesBomberman, texture => {
      const frames = scaleAtlasFrames(nesBombermanFrames)

      texture.addFrame(frames)
    })
  },
  create: scene => {
    state.field.backgroundTiles.add(
      ...scene.add.tileGrid({
        grid: EMPTY_FIELD,
        cellSize: CELL_WIDTH,
        gridWidth: GRID_WIDTH,
        cells: {
          [Kind.Empty]: `nesBomberman:empty:${Depth.Ground}`,
          [Kind.WallHard]: `nesBomberman:wallHard:${Depth.Ground}`,
        },
      })
    )

    state.player.ref = makePlayer(scene, PLAYER_STARTING_POSITION)

    addSoftWalls(scene, state, SOFT_WALL_SPAWN_OFFSET)
    spawnEnemies(scene, state, ENEMY_SPAWN_OFFSET)

    scene.camera.bind(state.player.ref)

    // cache walls for collision detection
    collidableCells.add(
      ...(scene.displayList.filter(
        sprite =>
          sprite instanceof Sprite &&
          (sprite.frame === 'wallSoft' || sprite.frame === 'wallHard')
      ) as Sprite[])
    )

    // controller = new EnemyController(
    //   s => s.frame === 'empty',
    //   collidableCells.toArray()
    // )

    // controller.add(state.field.enemies.toArray(), PLAYER_VELOCITY)

    makeDoor(scene, new Point(1680, 720))

    gameStarted()
  },
  update: (scene, frame, kbd) => {
    const { ref: player } = state.player

    if (!player) {
      return
    }

    state.player.direction = new Point()

    if (state.player.playerDead) {
      scene.anims.run(player, 'die', frame.delta, true)
    } else {
      if (kbd.left) {
        state.player.direction.x -= 1
        scene.anims.run(player, 'left', frame.delta)
      }
      if (kbd.right) {
        state.player.direction.x += 1
        scene.anims.run(player, 'right', frame.delta)
      }
      if (kbd.up) {
        state.player.direction.y -= 1
        scene.anims.run(player, 'up', frame.delta)
      }
      if (kbd.down) {
        state.player.direction.y += 1
        scene.anims.run(player, 'down', frame.delta)
      }

      const playerMovingDiagonally =
        state.player.direction.x !== 0 && state.player.direction.y !== 0

      if (playerMovingDiagonally) {
        const length = Math.sqrt(0.5)
        state.player.direction.map(s => Math.sign(s) * length)
      }

      if (
        kbd.space &&
        state.field.bombs.length < (state.player.buffs.bombAmountUp ? 2 : 1) &&
        frame.now - lastBombPlacementTime > 1000
      ) {
        const bombCell = nearestCell(state.player.ref!).copy()

        state.field.bombs.unshift(makeBomb(scene, bombCell))
        lastBombPlacementTime = frame.now

        delay(BOMB_FUSE).then(() => {
          const radius = state.player.buffs.bombRangeUp ? 2 : 1

          state.field.explosions.add(
            ...resolveExplosion(bombCell, radius).map(
              ({ point, orientation }) => {
                return makeExplosion(scene, point, orientation)
              }
            )
          )

          state.field.bombs.destroyLast()

          delay(EXPLOSION_DURATION).then(() => {
            const shouldGetBuff = withChance(BUFF_CHANCE)
            let buffAlreadyCreated = false

            for (const softWall of state.field.softWalls) {
              if (!buffAlreadyCreated && shouldGetBuff) {
                buffAlreadyCreated = false

                state.field.buffs.add(makeBuff(scene, softWall))
              }
            }

            state.field.explosions.destroyAll()
          })
        })
      }
    }

    /* --- Update Animations --- */
    for (const explosion of state.field.explosions) {
      const wallToDestroy = state.field.softWalls.byPoint(explosion)

      if (wallToDestroy) {
        scene.anims.run(wallToDestroy, 'destroy', frame.delta, true)

        delay(EXPLOSION_DURATION).then(() => {
          const destroyed = state.field.softWalls.destroyByPoint(explosion)
          if (destroyed) {
            pointsAdded(Points.Wall)
          }
        })
      }

      scene.anims.run(explosion, 'pulse', frame.delta, true)
    }

    for (const bomb of state.field.bombs) {
      scene.anims.run(bomb, 'pulse', frame.delta)
    }

    /* --- Update Player --- */
    const playerNotMoving =
      !kbd.left &&
      !kbd.right &&
      !kbd.up &&
      !kbd.down &&
      !state.player.playerDead

    if (playerNotMoving) {
      const lastAnimationFrame =
        player.animations.get(state.player.lastDirection)?.currentFrame ||
        'bombermanDown2'
      player.frame = lastAnimationFrame
    }

    const playerHitByExplosion = state.field.explosions.byPoint(
      nearestCell(player)
    )
    const playerHitByEnemy = state.field.enemies.byPoint(player)

    if (playerHitByEnemy || playerHitByExplosion) {
      state.player.playerDead = true
    }

    // controller.run(frame.delta)

    for (const buff of state.field.buffs) {
      const playerPickBuff = state.field.buffs.byPoint(nearestCell(player))
      // const player = Point.from(state.player.ref!)

      // const playerPickBuff = circleCircleCollision(
      //   player,
      //   CELL_WIDTH / 2,
      //   buff,
      //   CELL_WIDTH / 2
      // )

      if (playerPickBuff) {
        const sprite = state.field.buffs.byPoint(nearestCell(player))

        if (!sprite) {
          break
        }

        const { frame = 'playerSpeedUp' } = sprite

        state.player.buffs[frame as 'playerSpeedUp'] = true

        state.field.buffs.destroyByPoint(nearestCell(player))

        delay(20000).then(
          () => (state.player.buffs[frame as 'playerSpeedUp'] = false)
        )
      }
    }

    const playerVelocity =
      PLAYER_VELOCITY * frame.delta * (state.player.buffs.playerSpeedUp ? 3 : 2)

    updatePlayerPosition(scene, state, playerVelocity)

    /* --- Update Enemies --- */
    for (const enemy of state.field.enemies) {
      const enemyInBlast = state.field.explosions.byPoint(enemy)

      const enemyHitPlayer = circleCircleCollision(
        enemy,
        CELL_WIDTH / 2,
        player,
        CELL_WIDTH / 2 - 30
      )

      if (enemyHitPlayer) {
        state.player.playerDead = true
      }

      if (enemyInBlast) {
        scene.anims.run(enemy, 'die', frame.delta, true)
        delay(500).then(() => {
          const destroyed = state.field.enemies.destroyByPoint(enemy)

          if (destroyed) {
            pointsAdded(Points.Enemy.Baloon)
          }
        })
      } else {
        scene.anims.run(enemy, 'right', frame.delta)
      }
    }
  },
}

function resolveRegion(
  rectOrigins: PointLike[],
  rectDimensions: PointLike,
  circleCenter: PointLike,
  circleRadius: number
) {
  const res = Point.from(circleCenter)

  for (const origin of rectOrigins) {
    const { x, y } = rectCircleResolve(
      origin,
      rectDimensions,
      res,
      circleRadius
    )
    res.x = x
    res.y = y
  }
  return res
}

function addSoftWalls(
  scene: SceneContext,
  state: GameState,
  wallSpawnOffset: PointLike
) {
  state.field.softWalls.add(
    ...generateWallPositions(
      EMPTY_FIELD,
      Point.from(wallSpawnOffset).scale(1 / CELL_WIDTH)
    ).map(cell => makeSoftWall(scene, Point.from(cell).scale(CELL_WIDTH)))
  )
}

function spawnEnemies(
  scene: SceneContext,
  state: GameState,
  enemySpawnOffset: PointLike
) {
  const vacantCells = state.field.backgroundTiles
    .toArray()
    .filter(
      sprite =>
        sprite.frame === 'empty' && !state.field.softWalls.byPoint(sprite)
    )

  for (const cell of vacantCells) {
    const canSpawnEnemy =
      cell.x >= enemySpawnOffset.x &&
      cell.y >= enemySpawnOffset.y &&
      state.field.enemies.length < MAX_ENEMY_COUNT

    if (withChance(20) && canSpawnEnemy) {
      const enemy = makeEnemy(scene, cell, 'baloon')

      state.field.enemies.add(enemy)
    }
  }
}

function updatePlayerPosition(
  scene: SceneContext,
  state: GameState,
  velocity: number
) {
  if (!state.player.ref) {
    return
  }

  const nextPlayerPosition = Point.from(state.player.ref).add(
    state.player.direction.scale(velocity)
  )

  const staticCells = state.field.softWalls
    .toArray()
    .concat(state.field.backgroundTiles.toArray())
    .filter(sprite => sprite.frame !== 'empty')

  const cellsAroundPlayer = selectNearbyCells(
    staticCells,
    nextPlayerPosition,
    2
  )

  const topLeftToCenterOffset = new Point(CELL_WIDTH / 2, CELL_WIDTH / 2)

  // move origin center, resolve collision, move back
  const resolved = resolveRegion(
    cellsAroundPlayer,
    CELL_DIMENSIONS,
    nextPlayerPosition.copy().add(topLeftToCenterOffset),
    topLeftToCenterOffset.x
  ).sub(topLeftToCenterOffset)

  state.player.ref.setPosition(resolved)
}
