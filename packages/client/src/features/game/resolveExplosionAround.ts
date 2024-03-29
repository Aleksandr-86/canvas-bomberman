import { CELL_WIDTH, GRID_WIDTH } from './const'
import { ExplosionOrientation } from './types'
import type { Obstacles } from './bombermanScene'
import { Point, type PointLike } from './utils'

/**
 * Gets background cell value from point
 * @param p point (game space)
 */
const cellCanExplode = ({ x, y }: PointLike, obstacles: Obstacles) => {
  const xOrth = x / CELL_WIDTH
  const yOrth = y / CELL_WIDTH

  return obstacles[xOrth][yOrth] !== 'wallHard'
}

const unit = {
  left: new Point(-1, 0).scale(CELL_WIDTH),
  right: new Point(1, 0).scale(CELL_WIDTH),
  up: new Point(0, -1).scale(CELL_WIDTH),
  down: new Point(0, 1).scale(CELL_WIDTH),
} as const

type ExplosionConfig = {
  point: PointLike
  orientation: ExplosionOrientation
}

/**
 * Create list of ExplosionConfig, every item has point of explosion and its orientation
 * Cells added from center in Left | Right | Up | Down order
 * @param walls list of coordinates to match (screen space)
 * @param center coordinate of explosion center (screen space)
 * @param radius explosion radius (game space)
 * @returns
 */
export function resolveExplosion(
  center: PointLike,
  radius: number,
  obstacles: Obstacles
) {
  const cutoffs = {
    left: false,
    right: false,
    up: false,
    down: false,
  }

  const hits: Record<string, ExplosionConfig[]> = {
    left: [],
    right: [],
    up: [],
    down: [],
  }

  const centerPoint = Point.from(center)

  for (const uninferred of Object.keys(unit)) {
    const direction = uninferred as keyof typeof unit
    for (let i = 1; i <= radius; ++i) {
      const pointInDirection = centerPoint
        .copy()
        .add(unit[direction].copy().scale(i))

      if (!cutoffs[direction] && cellCanExplode(pointInDirection, obstacles)) {
        const capitalized = direction[0].toUpperCase() + direction.slice(1)

        const isLastInLine = i === radius

        const hasNextCell = cellCanExplode(
          centerPoint.copy().add(unit[direction].copy().scale(i + 1)),
          obstacles
        )

        const orientation =
          isLastInLine || !hasNextCell
            ? `explosionTip${capitalized}`
            : `explosion${capitalized}`

        hits[direction].push({
          point: pointInDirection,
          orientation: orientation as ExplosionOrientation,
        })

        // Получение типа следующей клетки
        const squareOrthX = pointInDirection.x / CELL_WIDTH
        const squareOrthY = pointInDirection.y / CELL_WIDTH
        const squareType = obstacles[squareOrthX][squareOrthY]
        if (squareType === 'wallHard' || squareType === 'wallSoft') {
          obstacles[squareOrthX][squareOrthY] = null
          // Прерываем ударную волну, если была разрушена кирпичная стена
          break
        }
      } else {
        cutoffs[direction] = true
      }
    }
  }

  const configs = Object.values(hits)
    .filter(s => s.length > 0)
    .flat()

  // if explosion goes in only one direction, change middle part accordingly
  const explosionHorizontal = hits.up.length === 0 && hits.down.length === 0
  const explosionVetical = hits.left.length === 0 && hits.right.length === 0

  const centerOrientation = explosionHorizontal
    ? 'Left'
    : explosionVetical
    ? 'Up'
    : 'Center'

  configs.push({
    point: centerPoint,
    orientation: `explosion${centerOrientation}`,
  })
  return configs
}
