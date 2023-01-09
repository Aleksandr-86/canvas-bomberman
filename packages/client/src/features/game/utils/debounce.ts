type AnyFunc = (...params: any[]) => any

export function debounce(func: AnyFunc, ms = 500) {
  let isCooldown = false

  return (...args: unknown[]) => {
    if (isCooldown) return

    func(args)
    isCooldown = true

    setTimeout(() => {
      isCooldown = false
    }, ms)
  }
}
