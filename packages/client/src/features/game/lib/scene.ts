import { Rect } from './game-objects'
import { Player } from './gameObjects'

export class Scene {
  public set player(player: Player) {
    this.player = player
  }
  public get player() {
    return this.player
  }

  public set walls(walls: Rect[]) {
    this.walls = walls
  }

  public get walls() {
    return this.walls
  }

  public render(ctx: CanvasRenderingContext2D) {
    this.walls.forEach(wall => wall.exec(ctx))
    this.player.exec(ctx)
  }
}
