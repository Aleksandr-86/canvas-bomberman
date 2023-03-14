import { GRID_WIDTH, GRID_HEIGHT, CELL_WIDTH } from './const'
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

type Criteria = (s: Sprite) => boolean

/**
 * Возвращает логическое "ИСТИНА" если
 * переданный в функцию аргумент
 * (представляющий собой координату x или y)
 * принадлежит к нечётному ряду или колонке.
 */
const isOdd = (num: number) => (num / CELL_WIDTH) % 2 === 0

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
  private field: Sprite[] = []
  private walls: (boolean | null)[][] = []

  constructor(private criteria: Criteria) {
    this._registerHardWalls()
  }

  private _registerHardWalls() {
    // Инициализация пустого двухмерного массива
    for (let x = 0; x < GRID_WIDTH; x++) {
      const row = []
      for (let y = 0; y < GRID_HEIGHT; y++) row.push(null)
      this.walls.push(row)
    }

    // Регистрация верхней границы уровня
    for (let x = 0; x < GRID_WIDTH; x++) {
      this.walls[x][0] = true
    }

    // Регистрация правой границы уровня
    for (let y = 1; y < GRID_HEIGHT - 1; y++) {
      this.walls[GRID_WIDTH - 1][y] = true
    }

    // Регистрация нижней границы уровня
    for (let x = 0; x < GRID_WIDTH; x++) {
      this.walls[x][GRID_HEIGHT - 1] = true
    }

    // Регистрация левой границы уровня
    for (let y = 1; y < GRID_HEIGHT - 1; y++) {
      this.walls[0][y] = true
    }

    // Регистрация колонн
    for (let y = 2; y <= GRID_HEIGHT; y += 2) {
      for (let x = 2; x <= GRID_WIDTH; x += 2) {
        this.walls[x][y] = true
      }
    }
  }

  // Регистрация кирпичных стен
  public registerSoftWalls(softWalls: Sprite[]) {
    for (const softWall of softWalls) {
      let { x, y } = softWall
      x /= CELL_WIDTH
      y /= CELL_WIDTH
      this.walls[x][y] = true
    }
  }

  public addField(field: Sprite[]) {
    this.field = field
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

  /**
   * Возвращает экземпляр класса Sprite,
   * олицетворяющий собой клетку к которой
   * двинется противник.
   */
  private chooseNextPoint(enemy: Sprite) {
    // Массив пригодных к перемещению клеток
    const suitable: Point[] = []
    // Целевая клетка к которой двинется противник
    let target = new Point(enemy.x, enemy.y)

    // Позиция противника в двумерном массиве
    const enemyX = enemy.x / CELL_WIDTH
    const enemyY = enemy.y / CELL_WIDTH

    // Определение первоначального направления движения противника
    if (enemy.movementDir === '') {
      const targetDir: string[] = []

      if (!this.walls[enemyX][enemyY - 1]) {
        targetDir.push('вверх')
      } else if (!this.walls[enemyX + 1][enemyY]) {
        targetDir.push('вправо')
      } else if (!this.walls[enemyX][enemyY + 1]) {
        targetDir.push('вниз')
      } else if (!this.walls[enemyX - 1][enemyY]) {
        targetDir.push('влево')
      }

      const dir = targetDir[randomInRange(0, targetDir.length - 1)]
      enemy.movementDir = dir
      // enemy.movementDir = 'влево'
    }

    // Движение вверх
    if (enemy.movementDir === 'вверх') {
      if (!this.walls[enemyX][enemyY - 1]) {
        target = Point.from(enemy).add(new Point(0, -CELL_WIDTH))
      } else {
        enemy.movementDir = 'вниз'
      }
    }
    // Движение вправо
    else if (enemy.movementDir === 'вправо') {
      if (!this.walls[enemyX + 1][enemyY]) {
        target = Point.from(enemy).add(new Point(CELL_WIDTH, 0))
      } else {
        enemy.movementDir = 'влево'
      }
    }
    // Движение вниз
    else if (enemy.movementDir === 'вниз') {
      if (!this.walls[enemyX][enemyY + 1]) {
        target = Point.from(enemy).add(new Point(0, CELL_WIDTH))
      } else {
        enemy.movementDir = 'вверх'
      }
    }
    // Движение влево
    else if (enemy.movementDir === 'влево') {
      if (!this.walls[enemyX - 1][enemyY]) {
        target = Point.from(enemy).add(new Point(-CELL_WIDTH, 0))
      } else {
        enemy.movementDir = 'вправо'
      }
    }

    // target = Array.from(suitable)[randomInRange(0, suitable.length - 1)]

    return target
  }

  run(delta: number) {
    for (const entry of this.state) {
      if (entry.movementState === MovementState.Idle) {
        const candidate = this.chooseNextPoint(entry.ref)

        if (!candidate) {
          continue
        }

        // const dest = Point.from(candidate)
        // dest.x = 0
        // entry.destination = dest

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
