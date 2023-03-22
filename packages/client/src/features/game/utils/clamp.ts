export function clamp(a: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, a))
}
