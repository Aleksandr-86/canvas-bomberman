const Keys = {
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'up',
  ArrowDown: 'down',
  Space: 'space',
} as const

export class Keyboard {
  public left = false
  public right = false
  public up = false
  public down = false
  public space = false

  constructor() {
    window.addEventListener('keydown', this.onKeyDown)
    window.addEventListener('keyup', this.onKeyUp)
  }

  onKeyDown = ({ code }: KeyboardEvent) => {
    if (code in Keys) {
      const keyName = Keys[code as keyof typeof Keys]
      this[keyName] = true
    }
  }

  onKeyUp = ({ code }: KeyboardEvent) => {
    if (code in Keys) {
      const keyName = Keys[code as keyof typeof Keys]
      this[keyName] = false
    }
  }
}
