import { type Sprite } from './lib'
import { Point, randomInRange, type PointLike } from './utils'
import { selectNearbyCells, nearestCell } from './gridHelpers'
import { CELL_WIDTH } from './const'
import { isValidElement } from 'react'

type EnemyState = {
  sprite: Sprite
  movementState: MovementState
  velocity: number
  destination: PointLike
}

enum MovementState {
  Moving,
  Idle,
}

export class EnemyController {
  private state: EnemyState[] = []

  constructor(
    private criteria: (s: Sprite) => boolean,
    private field: Sprite[]
  ) {}

  public add(sprites: Sprite[], velocity: number) {
    for (const sprite of sprites) {
      this.state.push({
        sprite: sprite,
        movementState: MovementState.Idle,
        destination: new Point(),
        velocity,
      })
    }
  }

  private chooseNextPoint(field: Sprite[], enemy: Sprite) {
    const region = selectNearbyCells(field, enemy, 1).filter(
      this.criteria as any
    )

    const suitable = region[randomInRange(0, region.length)]

    return Point.from(enemy).copy().sub(Point.from(suitable))
  }

  run(delta: number) {
    for (const enemy of this.state) {
      // enemy.sprite.setPosition(
      //   new Point(enemy.sprite.x + 0.5, enemy.sprite.y + 0.5)
      // )
    }

    // for (let i = 0; i < this.state.length; ++i) {
    //   const entry = this.state[i]
    //   if (entry.movementState === MovementState.Idle) {
    //     const nextPoint = this.chooseNextPoint(this.field, entry.sprite)
    //     entry.destination = Point.from(entry.sprite).add(
    //       new Point(CELL_WIDTH, CELL_WIDTH)
    //     )
    //     entry.movementState = MovementState.Moving
    //   }
    // if (entry.movementState === MovementState.Moving) {
    //   const newPosition = Point.from(entry.sprite).add(
    //     Point.from(entry.destination)
    //       .copy()
    //       .scale(delta * entry.velocity)
    //   )
    //   entry.sprite.setPosition(newPosition)
    // }
    // }
  }
}
