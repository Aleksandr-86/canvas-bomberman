import { CELL_WIDTH } from './const'
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

const almostEqual = (p1: Point, p2: Point) => {
  const dist = Point.from(p1).sub(p2).mag()
  return Math.abs(dist) <= 10
}

export class EnemyController {
  private state: EnemyState[] = []
  private field: Sprite[] = []

  constructor(private criteria: Criteria) {}

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

  private chooseNextPoint(enemy: Sprite) {
    const suitable = []
    for (const cell of this.field) {
      // right
      if (Point.from(cell).equals(Point.from(enemy).add(new Point(80, 0)))) {
        suitable.push(cell)
      }
      // left
      if (Point.from(cell).equals(Point.from(enemy).add(new Point(-80, 0)))) {
        suitable.push(cell)
      }
      // down
      if (Point.from(cell).equals(Point.from(enemy).add(new Point(0, 80)))) {
        suitable.push(cell)
      }

      // up
      if (Point.from(cell).equals(Point.from(enemy).add(new Point(0, 80)))) {
        suitable.push(cell)
      }
    }

    const f = suitable.filter(this.criteria)

    return f[randomInRange(0, f.length - 1)]
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
