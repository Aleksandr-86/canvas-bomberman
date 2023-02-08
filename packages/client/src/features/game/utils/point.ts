export type TPoint = { x: number; y: number }

export const Point = {
  New: (x: number, y: number) => ({
    x,
    y,
  }),
  get Left() {
    return { x: -1, y: 0 }
  },
  get Right() {
    return { x: 1, y: 0 }
  },
  get Up() {
    return { x: 0, y: -1 }
  },
  get Down() {
    return { x: 0, y: 1 }
  },
  get Zero() {
    return { x: 0, y: 0 }
  },

  mul: (s: number) => (p: TPoint) => ({ x: p.x * s, y: p.y * s }),
  add: (p1: TPoint) => (p2: TPoint) => ({ x: p1.x + p2.x, y: p1.y + p2.y }),
  equals: (p1: TPoint) => (p2: TPoint) => p1.x === p2.x && p1.y === p2.y,
  copy: (p: TPoint) => ({ x: p.x, y: p.y }),
  lerp: (from: TPoint) => (to: TPoint) => (t: number) => {
    if (t > 1 || t < 0) throw new Error('t should be between 0 and 1')

    return {
      x: from.x + (to.x - from.x) * t,
      y: from.y + (to.y - from.y) * t,
    }
  },
}
