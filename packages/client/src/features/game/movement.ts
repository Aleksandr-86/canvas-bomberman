import { Point, randomInRange } from './utils'
import { type Sprite } from './lib'

export class Movement {
  public isMoving = false
  public destination: Point = new Point()

  constructor(
    public actor: Sprite,
    public start: Point = new Point(actor.x, actor.y),
    private criteria: (sprites: Sprite) => boolean,
    private field: Sprite[]
  ) {}

  public startMove(destination: Point) {
    this.destination = destination
  }

  public changeState() {
    this.isMoving = !this.isMoving
  }

  private selectDestination() {
    const candidates = this.field.filter(this.criteria)
    const selected = candidates[randomInRange(0, candidates.length - 1)]

    this.destination = new Point(selected.x, selected.y)
  }

  public run(velocity: number) {
    const actorPosition = new Point(this.actor.x, this.actor.y)

    if (!actorPosition.equals(this.destination)) {
      const direction = actorPosition.sub(this.destination).normalize()

      const newPos = new Point(this.actor.x, this.actor.y).add(
        direction.scale(velocity)
      )

      this.actor.setPosition(newPos)
      this.isMoving = false
      return direction
    } else {
      this.isMoving = true
      return new Point()
    }
  }
}
