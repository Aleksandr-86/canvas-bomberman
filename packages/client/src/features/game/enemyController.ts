import {
  CELL_WIDTH,
  CHANGE_DIR_POSSIBILITY_CHANCE,
  U_TURN_CHANCE,
  LOWER_BOUND_MILE_AGE,
  UPPER_BOUND_MILE_AGE,
  GRID_WIDTH,
  GRID_HEIGHT,
  BASIC_ENEMY_VELOCITY,
} from './const'
import { type Sprite } from './lib'
import type { Obstacles } from './bombermanScene'
import { Point, PointLike, randomInRange } from './utils'

type EnemyState = {
  ref: Sprite
  movementState: MovementState
  velocity: number
  destination: Point
}

enum MovementState {
  Moving,
  Idle,
}

/**
 * Возвращает логическое значение "ИСТИНА" в случае
 * соответствия векторов Point между собой с допуском
 * меньше либо равно 10 пикселей.
 */
const almostEqual = (p1: Point, p2: Point) => {
  const dist = Point.from(p1).sub(p2).mag()
  return Math.abs(dist) <= 10
}

/**
 * Добавляет противников в сцену, контролирует
 * выбор плиток для передвижения, а также
 * обеспечивает передвижение противников.
 */
export class EnemyController {
  private state: EnemyState[] = []

  public addEnemies(sprites: Sprite[]) {
    for (const sprite of sprites) {
      const enemyName = sprite.frame.slice(0, sprite.frame.length - 1)

      // TODO: Временное решение. Переделать. (комментарий Aleksandr-86)
      let velocity = 0
      if (enemyName === 'baloon') {
        velocity = BASIC_ENEMY_VELOCITY
      } else if (enemyName === 'droplet') {
        velocity = BASIC_ENEMY_VELOCITY * 1.5
      } else if (enemyName === 'overtimeCoin') {
        velocity = BASIC_ENEMY_VELOCITY * 2.5
      }

      this.state.push({
        ref: sprite,
        movementState: MovementState.Idle,
        destination: new Point(),
        velocity,
      })
    }
  }

  /**
   * Возвращает массив строк представляющих
   * возможные направления движения противника.
   */
  private possibleDirections(
    enemyX: number,
    enemyY: number,
    obstacles: Obstacles,
    wallIgnore: boolean
  ) {
    const possibleDirections: string[] = []

    const topSquare = obstacles[enemyX][enemyY - 1]
    const rightSquare = obstacles[enemyX + 1][enemyY]
    const bottomSquare = obstacles[enemyX][enemyY + 1]
    const leftSquare = obstacles[enemyX - 1][enemyY]

    if (
      (!wallIgnore && !topSquare) ||
      (wallIgnore && topSquare !== 'wallHard' && topSquare !== 'bomb')
    ) {
      possibleDirections.push('вверх')
    }

    if (
      (!wallIgnore && !rightSquare) ||
      (wallIgnore && rightSquare !== 'wallHard' && rightSquare !== 'bomb')
    ) {
      possibleDirections.push('вправо')
    }

    if (
      (!wallIgnore && !bottomSquare) ||
      (wallIgnore && bottomSquare !== 'wallHard' && bottomSquare !== 'bomb')
    ) {
      possibleDirections.push('вниз')
    }

    if (
      (!wallIgnore && !leftSquare) ||
      (wallIgnore && leftSquare !== 'wallHard' && leftSquare !== 'bomb')
    ) {
      possibleDirections.push('влево')
    }

    return possibleDirections
  }

  private playerHunting(
    enemyX: number,
    enemyY: number,
    obstacles: Obstacles,
    lastPlayerPos: PointLike
  ) {
    const dirs: string[] = []

    const topSquare = obstacles[enemyX][enemyY - 1]
    const rightSquare = obstacles[enemyX + 1][enemyY]
    const bottomSquare = obstacles[enemyX][enemyY + 1]
    const leftSquare = obstacles[enemyX - 1][enemyY]

    if (enemyX > lastPlayerPos.x) {
      if (leftSquare !== 'wallHard' && leftSquare !== 'bomb') {
        dirs.push('влево')
      }

      if (enemyY > lastPlayerPos.y) {
        if (topSquare !== 'wallHard' && topSquare !== 'bomb') {
          dirs.push('вверх')
        }
      } else if (enemyY < lastPlayerPos.y) {
        if (bottomSquare !== 'wallHard' && bottomSquare !== 'bomb') {
          dirs.push('вниз')
        }
      }
    } else if (enemyX < lastPlayerPos.x) {
      if (rightSquare !== 'wallHard' && rightSquare !== 'bomb') {
        dirs.push('вправо')
      }

      if (enemyY > lastPlayerPos.y) {
        if (topSquare !== 'wallHard' && topSquare !== 'bomb') {
          dirs.push('вверх')
        }
      } else if (enemyY < lastPlayerPos.y) {
        if (bottomSquare !== 'wallHard' && bottomSquare !== 'bomb') {
          dirs.push('вниз')
        }
      }
    }
    return dirs
  }

  /**
   * Возвращает клетку к которой двинется противник.
   */
  private chooseNextPoint(
    enemy: Sprite,
    obstacles: Obstacles,
    lastPlayerPos: PointLike
  ) {
    // TODO: Временное решение. Переделать. (комментарий Aleksandr-86)
    const enemyName = enemy.frame.slice(0, enemy.frame.length - 1)
    const isOvertimeCoin = enemyName === 'overtimeCoin'

    const enemyOrthX = Math.floor(enemy.x / CELL_WIDTH)
    const enemyOrthY = Math.floor(enemy.y / CELL_WIDTH)

    if (
      enemyOrthX > GRID_WIDTH - 2 ||
      enemyOrthX < 1 ||
      enemyOrthY > GRID_HEIGHT - 2 ||
      enemyOrthY < 1 ||
      enemy.x % CELL_WIDTH !== 0 ||
      enemy.y % CELL_WIDTH !== 0
    ) {
      return
    }

    let target = new Point(enemy.x, enemy.y)
    enemy.totalMileAge++

    // Позиция противника в двумерном массиве
    const enemyX = enemy.x / CELL_WIDTH
    const enemyY = enemy.y / CELL_WIDTH

    /**
     * Определение первоначального направления движения противника,
     * а также случайного значения randomMileAge
     */
    if (enemy.movementDir === '') {
      let possDirs: string[] = []

      if (isOvertimeCoin) {
        possDirs = this.possibleDirections(enemyX, enemyY, obstacles, true)
      } else {
        possDirs = this.possibleDirections(enemyX, enemyY, obstacles, false)
      }
      enemy.movementDir = possDirs[randomInRange(0, possDirs.length - 1)]

      // TODO: Временное решение. Переделать. (комментарий Aleksandr-86)
      if (isOvertimeCoin) {
        enemy.randomMileAge = randomInRange(
          LOWER_BOUND_MILE_AGE + 40,
          UPPER_BOUND_MILE_AGE + 40
        )
      } else {
        enemy.randomMileAge = randomInRange(
          LOWER_BOUND_MILE_AGE,
          UPPER_BOUND_MILE_AGE
        )
      }
    }

    // Определение возможности изменения направления
    if (
      !enemy.changeDirPossibility &&
      enemy.totalMileAge > enemy.randomMileAge
    ) {
      if (randomInRange(1, 100) <= CHANGE_DIR_POSSIBILITY_CHANCE) {
        enemy.changeDirPossibility = true
      }
    }

    const topSquare = obstacles[enemyX][enemyY - 1]
    const rightSquare = obstacles[enemyX + 1][enemyY]
    const bottomSquare = obstacles[enemyX][enemyY + 1]
    const leftSquare = obstacles[enemyX - 1][enemyY]

    if (enemy.changeDirPossibility) {
      let dirs: string[] = []

      // Выбор направлений при ПОВОРОТЕ на развилке
      if (isOvertimeCoin && randomInRange(1, 100) <= 75) {
        dirs = this.playerHunting(enemyX, enemyY, obstacles, lastPlayerPos)
      } else {
        dirs = this.possibleDirections(enemyX, enemyY, obstacles, false)
      }

      let filteredDirs: string[] = []
      // РАЗВОРОТ на 180 градусов
      if (randomInRange(1, 100) <= U_TURN_CHANCE) {
        filteredDirs = dirs.filter(d => d !== enemy.movementDir)
      } else {
        if (enemy.movementDir === 'вверх' || enemy.movementDir === 'вниз') {
          filteredDirs = dirs.filter(d => d !== 'вверх' && d !== 'вниз')
        } else {
          filteredDirs = dirs.filter(d => d !== 'вправо' && d !== 'влево')
        }
      }

      if (filteredDirs.length > 0) {
        const dir = filteredDirs[randomInRange(0, filteredDirs.length - 1)]

        if (dir === 'вверх') {
          target = Point.from(enemy).add(new Point(0, -CELL_WIDTH))
        } else if (dir === 'вправо') {
          target = Point.from(enemy).add(new Point(CELL_WIDTH, 0))
        } else if (dir === 'вниз') {
          target = Point.from(enemy).add(new Point(0, CELL_WIDTH))
        } else if (dir === 'влево') {
          target = Point.from(enemy).add(new Point(-CELL_WIDTH, 0))
        }

        enemy.totalMileAge = 0

        enemy.randomMileAge = randomInRange(
          LOWER_BOUND_MILE_AGE,
          UPPER_BOUND_MILE_AGE
        )
        enemy.changeDirPossibility = false
        enemy.movementDir = dir
      }
    }

    /**
     * РАЗВОРОТ В ТУПИКЕ
     */
    // Движение вверх
    if (enemy.movementDir === 'вверх') {
      if (
        !topSquare ||
        (isOvertimeCoin && topSquare !== 'wallHard' && topSquare !== 'bomb')
      ) {
        target = Point.from(enemy).add(new Point(0, -CELL_WIDTH))
      } else {
        enemy.movementDir = 'вниз'
      }
    }
    // Движение вправо
    else if (enemy.movementDir === 'вправо') {
      if (
        !rightSquare ||
        (isOvertimeCoin && rightSquare !== 'wallHard' && rightSquare !== 'bomb')
      ) {
        target = Point.from(enemy).add(new Point(CELL_WIDTH, 0))
      } else {
        enemy.movementDir = 'влево'
      }
    }
    // Движение вниз
    else if (enemy.movementDir === 'вниз') {
      if (
        !bottomSquare ||
        (isOvertimeCoin &&
          bottomSquare !== 'wallHard' &&
          bottomSquare !== 'bomb')
      ) {
        target = Point.from(enemy).add(new Point(0, CELL_WIDTH))
      } else {
        enemy.movementDir = 'вверх'
      }
    }
    // Движение влево
    else if (enemy.movementDir === 'влево') {
      if (
        !leftSquare ||
        (isOvertimeCoin && leftSquare !== 'wallHard' && leftSquare !== 'bomb')
      ) {
        target = Point.from(enemy).add(new Point(-CELL_WIDTH, 0))
      } else {
        enemy.movementDir = 'вправо'
      }
    }

    return target
  }

  run(delta: number, obstacles: Obstacles, lastPlayerPos: PointLike) {
    for (const entry of this.state) {
      if (entry.movementState === MovementState.Idle) {
        const candidate = this.chooseNextPoint(
          entry.ref,
          obstacles,
          lastPlayerPos
        )

        if (!candidate) {
          continue
        }

        entry.destination = Point.from(candidate)

        entry.movementState = MovementState.Moving
      }

      if (entry.movementState === MovementState.Moving) {
        const direction = Point.from(entry.destination)
          .copy()
          .sub(entry.ref)
          .scale(1 / CELL_WIDTH)

        const nextPosition = Point.from(entry.ref).add(
          direction.copy().scale(delta * entry.velocity)
        )

        if (almostEqual(entry.destination, nextPosition)) {
          entry.movementState = MovementState.Idle
          entry.ref.setPosition(entry.destination)
          continue
        } else {
          entry.ref.setPosition(nextPosition)
        }
      }
    }
  }
}
