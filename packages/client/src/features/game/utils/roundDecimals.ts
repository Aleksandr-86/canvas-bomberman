/**
 * round float to n decimal places
 */
export function roundDecimals(num: number, place: number) {
  const exp = 10 ** place

  return Math.round(num * exp) / exp
}
