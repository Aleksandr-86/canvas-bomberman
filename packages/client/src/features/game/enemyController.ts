import { isAxiosError } from 'axios'
import {
  GRID_WIDTH,
  GRID_HEIGHT,
  CELL_WIDTH,
  CHANGE_DIR_POSSIBILITY_CHANCE,
  U_TURN_CHANCE,
  LOWER_BOUND_MILE_AGE,
  UPPER_BOUND_MILE_AGE,
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
  private obstacles: (boolean | null)[][] = []

  constructor() {
    this.registerHardWalls()
  }

  // Регистрация границ уровня и колонн
  private registerHardWalls() {
    // Инициализация пустого двухмерного массива
    for (let x = 0; x < GRID_WIDTH; x++) {
      const row = []
      for (let y = 0; y < GRID_HEIGHT; y++) row.push(null)
      this.obstacles.push(row)
    }

    // Регистрация верхней границы уровня
    for (let x = 0; x < GRID_WIDTH; x++) {
      this.obstacles[x][0] = true
    }

    // Регистрация правой границы уровня
    for (let y = 1; y < GRID_HEIGHT - 1; y++) {
      this.obstacles[GRID_WIDTH - 1][y] = true
    }

    // Регистрация нижней границы уровня
    for (let x = 0; x < GRID_WIDTH; x++) {
      this.obstacles[x][GRID_HEIGHT - 1] = true
    }

    // Регистрация левой границы уровня
    for (let y = 1; y < GRID_HEIGHT - 1; y++) {
      this.obstacles[0][y] = true
    }

    // Регистрация колонн
    for (let y = 2; y <= GRID_HEIGHT; y += 2) {
      for (let x = 2; x <= GRID_WIDTH; x += 2) {
        this.obstacles[x][y] = true
      }
    }
  }

  // Регистрация кирпичных стен
  public registerSoftWalls(softWalls: Sprite[]) {
    for (const softWall of softWalls) {
      let { x, y } = softWall
      x /= CELL_WIDTH
      y /= CELL_WIDTH
      this.obstacles[x][y] = true
    }
  }

  // Регистрация установленной бомбы
  public registerObstacle(bombCell: Point) {
    let { x, y } = bombCell
    x /= CELL_WIDTH
    y /= CELL_WIDTH
    this.obstacles[x][y] = true
  }

  // Отмена регистрации установленной бомбы
  public unregisterObstacle(bombCell: Point) {
    let { x, y } = bombCell
    x /= CELL_WIDTH
    y /= CELL_WIDTH
    this.obstacles[x][y] = false
  }

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
  private possibleDirections(enemyX: number, enemyY: number) {
    const possibleDirections: string[] = []

    if (!this.obstacles[enemyX][enemyY - 1]) {
      possibleDirections.push('вверх')
    }
    if (!this.obstacles[enemyX + 1][enemyY]) {
      possibleDirections.push('вправо')
    }
    if (!this.obstacles[enemyX][enemyY + 1]) {
      possibleDirections.push('вниз')
    }
    if (!this.obstacles[enemyX - 1][enemyY]) {
      possibleDirections.push('влево')
    }

    return possibleDirections
  }

  /**
   * Возвращает клетку к которой двинется противник.
   */
  private chooseNextPoint(enemy: Sprite) {
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
      const possDirs = this.possibleDirections(enemyX, enemyY)
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
      const dirs = this.possibleDirections(enemyX, enemyY)
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
      if (!this.obstacles[enemyX][enemyY - 1]) {
        target = Point.from(enemy).add(new Point(0, -CELL_WIDTH))
      } else {
        enemy.movementDir = 'вниз'
      }
    }
    // Движение вправо
    else if (enemy.movementDir === 'вправо') {
      if (!this.obstacles[enemyX + 1][enemyY]) {
        target = Point.from(enemy).add(new Point(CELL_WIDTH, 0))
      } else {
        enemy.movementDir = 'влево'
      }
    }
    // Движение вниз
    else if (enemy.movementDir === 'вниз') {
      if (!this.obstacles[enemyX][enemyY + 1]) {
        target = Point.from(enemy).add(new Point(0, CELL_WIDTH))
      } else {
        enemy.movementDir = 'вверх'
      }
    }
    // Движение влево
    else if (enemy.movementDir === 'влево') {
      if (!this.obstacles[enemyX - 1][enemyY]) {
        target = Point.from(enemy).add(new Point(-CELL_WIDTH, 0))
      } else {
        enemy.movementDir = 'вправо'
      }
    }

    return target
  }

  run(delta: number) {
    for (const entry of this.state) {
      if (entry.movementState === MovementState.Idle) {
        const candidate = this.chooseNextPoint(entry.ref)

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
