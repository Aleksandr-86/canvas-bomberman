import { setSoundBomb } from '../../../api/audio'
const Keys = {
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'up',
  ArrowDown: 'down',
  ' ': 'space',
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

  onKeyDown = ({ key }: KeyboardEvent) => {
    if (key in Keys) {
      const keyName = Keys[key as keyof typeof Keys]
      this[keyName] = true
      if (this.space) {
        setSoundBomb()
      }
    }
  }

  onKeyUp = ({ key }: KeyboardEvent) => {
    if (key in Keys) {
      const keyName = Keys[key as keyof typeof Keys]
      this[keyName] = false
    }
  }
}
