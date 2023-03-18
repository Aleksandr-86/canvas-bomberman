import {
  CELL_WIDTH,
  CHANGE_DIR_POSSIBILITY_CHANCE,
  U_TURN_CHANCE,
  LOWER_BOUND_MILE_AGE,
  UPPER_BOUND_MILE_AGE,
  GRID_WIDTH,
  GRID_HEIGHT,
} from './const'
import { type Sprite } from './lib'
import { Point, randomInRange } from './utils'

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

  public addEnemies(sprites: Sprite[], velocity: number) {
    for (const sprite of sprites) {
      this.state.push({
        ref: sprite,
        movementState: MovementState.Idle,
        destination: new Point(),
        velocity,
      })
    }
  }

  // Поиск возможных направлений движения противника
  private possibleDirections(
    enemyX: number,
    enemyY: number,
    obstacles: ('concrete' | 'wall' | 'bomb' | null)[][]
  ) {
    const possibleDirections: string[] = []

    if (!obstacles[enemyX][enemyY - 1]) {
      possibleDirections.push('вверх')
    }
    if (!obstacles[enemyX + 1][enemyY]) {
      possibleDirections.push('вправо')
    }
    if (!obstacles[enemyX][enemyY + 1]) {
      possibleDirections.push('вниз')
    }
    if (!obstacles[enemyX - 1][enemyY]) {
      possibleDirections.push('влево')
    }

    return possibleDirections
  }

  /**
   * Возвращает клетку к которой двинется противник.
   */
  private chooseNextPoint(
    enemy: Sprite,
    obstacles: ('concrete' | 'wall' | 'bomb' | null)[][]
  ) {
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
      // enemy.x = 240
      // enemy.y = 240
      // return
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
      const possDirs = this.possibleDirections(enemyX, enemyY, obstacles)
      enemy.movementDir = possDirs[randomInRange(0, possDirs.length - 1)]
      enemy.randomMileAge = randomInRange(
        LOWER_BOUND_MILE_AGE,
        UPPER_BOUND_MILE_AGE
      )
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

    if (enemy.changeDirPossibility) {
      const dirs = this.possibleDirections(enemyX, enemyY, obstacles)
      let filteredDirs: string[] = []

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

    // Движение вверх
    if (enemy.movementDir === 'вверх') {
      if (!obstacles[enemyX][enemyY - 1]) {
        target = Point.from(enemy).add(new Point(0, -CELL_WIDTH))
      } else {
        enemy.movementDir = 'вниз'
      }
    }
    // Движение вправо
    else if (enemy.movementDir === 'вправо') {
      if (!obstacles[enemyX + 1][enemyY]) {
        target = Point.from(enemy).add(new Point(CELL_WIDTH, 0))
      } else {
        enemy.movementDir = 'влево'
      }
    }
    // Движение вниз
    else if (enemy.movementDir === 'вниз') {
      if (!obstacles[enemyX][enemyY + 1]) {
        target = Point.from(enemy).add(new Point(0, CELL_WIDTH))
      } else {
        enemy.movementDir = 'вверх'
      }
    }
    // Движение влево
    else if (enemy.movementDir === 'влево') {
      if (!obstacles[enemyX - 1][enemyY]) {
        target = Point.from(enemy).add(new Point(-CELL_WIDTH, 0))
      } else {
        enemy.movementDir = 'вправо'
      }
    }

    return target
  }

  run(delta: number, obstacles: ('concrete' | 'wall' | 'bomb' | null)[][]) {
    for (const entry of this.state) {
      if (entry.movementState === MovementState.Idle) {
        const candidate = this.chooseNextPoint(entry.ref, obstacles)

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
