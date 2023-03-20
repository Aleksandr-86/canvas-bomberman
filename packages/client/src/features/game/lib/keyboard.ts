const Keys = {
  ArrowLeft: 'left',
  KeyA: 'left',
  ArrowRight: 'right',
  KeyD: 'right',
  ArrowUp: 'up',
  KeyW: 'up',
  ArrowDown: 'down',
  KeyS: 'down',
  Space: 'space',
  Enter: 'enter'
} as const

export class Keyboard {
  public left = false
  public right = false
  public up = false
  public down = false
  public space = false
  public control = false
  public enter = false

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
