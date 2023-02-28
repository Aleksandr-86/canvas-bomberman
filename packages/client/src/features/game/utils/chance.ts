export function withChance(percent: number) {
  return Math.random() * 101 < percent
}
