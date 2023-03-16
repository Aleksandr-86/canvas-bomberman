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
  BOMB_PLACEMENT_COOLDOWN,
  GRID_HEIGHT,
} from './const'
import { Sprite } from './lib/gameObjects'
import { type SceneConfig } from './lib'
import { Kind } from './types'
import { Point, type PointLike, delay, withChance } from './utils'
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
    isDead: boolean
    lastFacing: 'left' | 'right' | 'up' | 'down'
    lastPos: { x: number; y: number }
    bombLimit: number
    bombRange: number
    speedScale: number
  }
  field: {
    obstacles: (boolean | null)[][]
    enemies: SpriteList
    backgroundTiles: SpriteList
    softWalls: SpriteList
    bombs: SpriteList
    bombsSet: Set<PointLike>
    explosions: SpriteList
    buffs: SpriteList
  }
}

const state: GameState = {
  player: {
    ref: null,
    direction: new Point(),
    isDead: false,
    lastFacing: 'down',
    // Координаты последний покинутой игроком клетки
    lastPos: { x: 1, y: 1 },
    bombLimit: 1,
    bombRange: 1,
    speedScale: 1,
  },
  field: {
    obstacles: [],
    enemies: new SpriteList(),
    backgroundTiles: new SpriteList(),
    softWalls: new SpriteList(),
    bombs: new SpriteList(),
    // Набор координат установленных бомб
    bombsSet: new Set(),
    explosions: new SpriteList(),
    buffs: new SpriteList(),
  },
}

// TODO: Инициализировать переменные при каждом создании игры
const controller = new EnemyController()

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
      ...scene.displayList.filter(
        sprite =>
          sprite instanceof Sprite &&
          (sprite.frame === 'wallSoft' || sprite.frame === 'wallHard')
      )
    )

    const door = new Point(640, 560)

    makeDoor(scene, door)
    state.field.softWalls.add(makeSoftWall(scene, door))

    // Регистрация границ уровня и колонн
    registerHardWalls()

    // Получение массива кирпичной кладки
    const softWalls = scene.displayList.filter(v => v.frame === 'wallSoft')
    registerSoftWalls(softWalls)

    controller.addEnemies(state.field.enemies.toArray(), PLAYER_VELOCITY)

    gameStarted()
  },
  update: (scene, frame, kbd) => {
    // player certainly defined in create()
    const playerRef = state.player.ref!

    state.player.direction = new Point()

    if (state.player.isDead) {
      scene.anims.run(playerRef, 'die', frame.delta, true)
      delay(500).then(() => scene.stopGame())
    } else {
      if (kbd.left) {
        state.player.direction.x -= 1
        scene.anims.run(playerRef, 'left', frame.delta)
      }
      if (kbd.right) {
        state.player.direction.x += 1
        scene.anims.run(playerRef, 'right', frame.delta)
      }
      if (kbd.up) {
        state.player.direction.y -= 1
        scene.anims.run(playerRef, 'up', frame.delta)
      }
      if (kbd.down) {
        state.player.direction.y += 1
        scene.anims.run(playerRef, 'down', frame.delta)
      }

      const playerMovingDiagonally =
        state.player.direction.x !== 0 && state.player.direction.y !== 0

      if (playerMovingDiagonally) {
        const length = Math.sqrt(0.5)
        state.player.direction.map(s => Math.sign(s) * length)
      }

      const belowMaxBombs = state.field.bombs.length < state.player.bombLimit
      const cooldown =
        frame.now - lastBombPlacementTime > BOMB_PLACEMENT_COOLDOWN
      if (kbd.space && belowMaxBombs && cooldown) {
        lastBombPlacementTime = frame.now
        const bombCell = nearestCell(playerRef).copy()

        /**
         * Проверяет возможность установки бомбы
         * (проверка отсутствия в данной клетки другой бомбы)
         */
        const x = bombCell.x / CELL_WIDTH
        const y = bombCell.y / CELL_WIDTH

        if (state.field.obstacles[x][y]) {
          return
        }

        registerObstacle(bombCell)

        state.field.bombs.unshift(makeBomb(scene, bombCell))

        delay(BOMB_FUSE).then(() => {
          unregisterObstacle(bombCell)
          // Исключает координаты бомб из набора
          state.field.bombsSet.forEach((b, _, set) => {
            if (
              b.x * CELL_WIDTH === bombCell.x &&
              b.y * CELL_WIDTH === bombCell.y
            ) {
              set.delete(b)
            }
          })

          state.field.explosions.add(
            ...resolveExplosion(bombCell, state.player.bombRange).map(
              ({ point, orientation }) => {
                return makeExplosion(scene, point, orientation)
              }
            )
          )

          state.field.bombs.destroyLast()

          delay(EXPLOSION_DURATION).then(() => {
            for (const wall of state.field.softWalls) {
              const wallWithExplosion = state.field.explosions.byPoint(wall)

              if (wallWithExplosion) {
                unregisterObstacle(
                  new Point(wallWithExplosion.x, wallWithExplosion.y)
                )
              }

              if (wallWithExplosion && withChance(BUFF_CHANCE)) {
                state.field.buffs.add(makeBuff(scene, wallWithExplosion))
                break
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
            pointsAdded(25)
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
      !kbd.left && !kbd.right && !kbd.up && !kbd.down && !state.player.isDead

    if (playerNotMoving) {
      const lastAnimationFrame =
        playerRef.animations.get(state.player.lastFacing)?.currentFrame ||
        'bombermanDown2'
      playerRef.frame = lastAnimationFrame
    }

    const playerHitByExplosion = state.field.explosions.byPoint(
      nearestCell(playerRef)
    )
    const playerHitByEnemy = state.field.enemies.byPoint(playerRef)

    if (playerHitByEnemy || playerHitByExplosion) {
      state.player.isDead = true
    }

    const playerPickBuff = state.field.buffs.byPoint(nearestCell(playerRef))

    if (playerPickBuff) {
      switch (playerPickBuff.frame) {
        case 'playerSpeedUp':
          state.player.speedScale += 0.5
          break

        case 'bombAmountUp':
          state.player.bombLimit += 1
          break

        case 'bombRangeUp':
          state.player.bombRange += 1
          break

        default:
          break
      }

      state.field.buffs.destroyByPoint(nearestCell(playerRef))
    }

    const playerVelocity =
      PLAYER_VELOCITY * frame.delta * state.player.speedScale

    updatePlayerPosition(scene, state, playerVelocity)

    /* --- Update Enemies --- */
    for (const enemy of state.field.enemies) {
      const enemyInBlast = state.field.explosions.byPoint(nearestCell(enemy))

      const enemyHitPlayer = circleCircleCollision(
        enemy,
        CELL_WIDTH / 2,
        playerRef,
        CELL_WIDTH / 2 - 10
      )

      if (enemyHitPlayer) {
        state.player.isDead = true
      }

      if (enemyInBlast) {
        scene.anims.run(enemy, 'die', frame.delta, true)
        delay(500).then(() => {
          const destroyed = state.field.enemies.destroyByPoint(enemy)

          if (destroyed) {
            pointsAdded(100)
          }
        })
      } else {
        scene.anims.run(enemy, 'right', frame.delta)
      }
    }

    controller.run(frame.delta, state.field.obstacles)
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

  const playerX = state.player.ref.x
  const playerY = state.player.ref.y
  const playerOrthX = Math.floor(playerX / CELL_WIDTH)
  const playerOrthY = Math.floor(playerY / CELL_WIDTH)
  const lastPos = state.player.lastPos
  const playerVel = PLAYER_VELOCITY / CELL_WIDTH + 2
  const trasholdX =
    playerX % CELL_WIDTH >= 0 && playerX % CELL_WIDTH <= playerVel
  const trasholdY =
    playerY % CELL_WIDTH >= 0 && playerY % CELL_WIDTH <= playerVel

  // Проверяет факт полного перехода игрока на другую клетку
  if (
    (playerOrthX !== lastPos.x && trasholdX) ||
    (playerOrthY !== lastPos.y && trasholdY)
  ) {
    if (state.field.obstacles[lastPos.x][lastPos.y]) {
      // Добавляет объект с координатами бомбы в набор
      state.field.bombsSet.add({ x: lastPos.x, y: lastPos.y })
    }

    // Сохраняет координаты последней посещённой игроком клетки
    state.player.lastPos = { x: playerOrthX, y: playerOrthY }
  }

  /**
   * Добавляет PointLike объект в массив cellsAroundPlayer
   * ограничивающий игрока от возврата в клетку,
   * в которой установлена бомба.
   */
  state.field.bombsSet.forEach(b => {
    cellsAroundPlayer.push({
      x: b.x * CELL_WIDTH,
      y: b.y * CELL_WIDTH,
    })
  })

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

// Регистрация границ уровня и колонн
const registerHardWalls = () => {
  // Инициализация пустого двухмерного массива
  for (let x = 0; x < GRID_WIDTH; x++) {
    const row = []
    for (let y = 0; y < GRID_HEIGHT; y++) row.push(null)
    state.field.obstacles.push(row)
  }

  // Регистрация верхней границы уровня
  for (let x = 0; x < GRID_WIDTH; x++) {
    state.field.obstacles[x][0] = true
  }

  // Регистрация правой границы уровня
  for (let y = 1; y < GRID_HEIGHT - 1; y++) {
    state.field.obstacles[GRID_WIDTH - 1][y] = true
  }

  // Регистрация нижней границы уровня
  for (let x = 0; x < GRID_WIDTH; x++) {
    state.field.obstacles[x][GRID_HEIGHT - 1] = true
  }

  // Регистрация левой границы уровня
  for (let y = 1; y < GRID_HEIGHT - 1; y++) {
    state.field.obstacles[0][y] = true
  }

  // Регистрация колонн
  for (let y = 2; y <= GRID_HEIGHT; y += 2) {
    for (let x = 2; x <= GRID_WIDTH; x += 2) {
      state.field.obstacles[x][y] = true
    }
  }
}

// Регистрация кирпичных стен
const registerSoftWalls = (softWalls: Sprite[]) => {
  for (const softWall of softWalls) {
    let { x, y } = softWall
    x /= CELL_WIDTH
    y /= CELL_WIDTH
    state.field.obstacles[x][y] = true
  }
}

// Регистрация препятствия
const registerObstacle = (bombCell: Point) => {
  let { x, y } = bombCell
  x /= CELL_WIDTH
  y /= CELL_WIDTH
  state.field.obstacles[x][y] = true
}

// Отмена регистрации препятствия
const unregisterObstacle = (bombCell: Point) => {
  let { x, y } = bombCell
  x /= CELL_WIDTH
  y /= CELL_WIDTH
  state.field.obstacles[x][y] = false
}
