import { Animation } from './lib/animation'
import { PLAYER_ANIMATION_DURATION, ENEMY_ANIMATION_DURATION } from './const'

const animations = {
  // Игрок
  bombermanLeft: [
    ['bombermanLeft1', 'bombermanLeft2', 'bombermanLeft3'],
    PLAYER_ANIMATION_DURATION,
  ],
  bombermanRight: [
    ['bombermanRight1', 'bombermanRight2', 'bombermanRight3'],
    PLAYER_ANIMATION_DURATION,
  ],
  bombermanDown: [
    ['bombermanDown1', 'bombermanDown2', 'bombermanDown3'],
    PLAYER_ANIMATION_DURATION,
  ],
  bombermanUp: [
    ['bombermanUp1', 'bombermanUp2', 'bombermanUp3'],
    PLAYER_ANIMATION_DURATION,
  ],
  bombermanDie: [
    [
      'bombermanDead1',
      'bombermanDead2',
      'bombermanDead3',
      'bombermanDead4',
      'bombermanDead5',
      'bombermanDead6',
      'bombermanDead7',
      'empty',
      'transparent',
    ],
    PLAYER_ANIMATION_DURATION * 0.8,
  ],

  // Воздушный шар
  baloonLeft: [['baloon1', 'baloon2', 'baloon3'], ENEMY_ANIMATION_DURATION],
  baloonRight: [['baloon1', 'baloon2', 'baloon3'], ENEMY_ANIMATION_DURATION],
  baloonUp: [['baloon1', 'baloon2', 'baloon3'], ENEMY_ANIMATION_DURATION],
  baloonDown: [['baloon1', 'baloon2', 'baloon3'], ENEMY_ANIMATION_DURATION],
  baloonDie: [
    [
      'baloonHit',
      'dieOrange1',
      'dieOrange2',
      'dieOrange3',
      'dieOrange4',
      'empty',
    ],
    ENEMY_ANIMATION_DURATION * 2,
  ],

  // Капля
  dropletLeft: [['droplet1', 'droplet2', 'droplet3'], ENEMY_ANIMATION_DURATION],
  dropletRight: [
    ['droplet1', 'droplet2', 'droplet3'],
    ENEMY_ANIMATION_DURATION,
  ],
  dropletUp: [['droplet1', 'droplet2', 'droplet3'], ENEMY_ANIMATION_DURATION],
  dropletDown: [['droplet1', 'droplet2', 'droplet3'], ENEMY_ANIMATION_DURATION],
  dropletDie: [
    ['dropletHit', 'dieBlue1', 'dieBlue2', 'dieBlue3', 'dieBlue4', 'empty'],
    ENEMY_ANIMATION_DURATION * 2,
  ],

  // Монета
  overtimeCoinLeft: [
    ['overtimeCoin1', 'overtimeCoin2', 'overtimeCoin3', 'overtimeCoin4'],
    ENEMY_ANIMATION_DURATION,
  ],
  overtimeCoinRight: [
    ['overtimeCoin1', 'overtimeCoin2', 'overtimeCoin3', 'overtimeCoin4'],
    ENEMY_ANIMATION_DURATION,
  ],
  overtimeCoinUp: [
    ['overtimeCoin1', 'overtimeCoin2', 'overtimeCoin3', 'overtimeCoin4'],
    ENEMY_ANIMATION_DURATION,
  ],
  overtimeCoinDown: [
    ['overtimeCoin1', 'overtimeCoin2', 'overtimeCoin3', 'overtimeCoin4'],
    ENEMY_ANIMATION_DURATION,
  ],
  overtimeCoinDie: [
    [
      'overtimeCoinHit',
      'dieOrange1',
      'dieOrange2',
      'dieOrange3',
      'dieOrange4',
      'empty',
    ],
    ENEMY_ANIMATION_DURATION * 2,
  ],

  // Бомба
  bombPulse: [['bomb1', 'bomb2', 'bomb3'], 800],
  softWallDestroy: [
    [
      'wallSoft',
      'wallSoftHit1',
      'wallSoftHit2',
      'wallSoftHit3',
      'wallSoftHit4',
      'wallSoftHit5',
      'wallSoftHit6',
      'empty',
    ],
    800,
  ],
  explosionCenter: [
    [
      'explosionCenter4',
      'explosionCenter3',
      'explosionCenter2',
      'explosionCenter1',
      'explosionCenter2',
      'explosionCenter3',
      'explosionCenter4',
    ],
    800,
  ],
  explosionTipUp: [
    [
      'explosionTipUp4',
      'explosionTipUp3',
      'explosionTipUp2',
      'explosionTipUp1',
      'explosionTipUp2',
      'explosionTipUp3',
      'explosionTipUp4',
    ],
    800,
  ],
  explosionTipDown: [
    [
      'explosionTipDown4',
      'explosionTipDown3',
      'explosionTipDown2',
      'explosionTipDown1',
      'explosionTipDown2',
      'explosionTipDown3',
      'explosionTipDown4',
    ],
    800,
  ],
  explosionTipLeft: [
    [
      'explosionTipLeft4',
      'explosionTipLeft3',
      'explosionTipLeft2',
      'explosionTipLeft1',
      'explosionTipLeft2',
      'explosionTipLeft3',
      'explosionTipLeft4',
    ],
    800,
  ],
  explosionTipRight: [
    [
      'explosionTipRight4',
      'explosionTipRight3',
      'explosionTipRight2',
      'explosionTipRight1',
      'explosionTipRight2',
      'explosionTipRight3',
      'explosionTipRight4',
    ],
    800,
  ],
  explosionUp: [
    [
      'explosionUp4',
      'explosionUp3',
      'explosionUp2',
      'explosionUp1',
      'explosionUp2',
      'explosionUp3',
      'explosionUp4',
    ],
    800,
  ],
  explosionDown: [
    [
      'explosionDown4',
      'explosionDown3',
      'explosionDown2',
      'explosionDown1',
      'explosionDown2',
      'explosionDown3',
      'explosionDown4',
    ],
    800,
  ],
  explosionLeft: [
    [
      'explosionLeft4',
      'explosionLeft3',
      'explosionLeft2',
      'explosionLeft1',
      'explosionLeft2',
      'explosionLeft3',
      'explosionLeft4',
    ],
    800,
  ],
  explosionRight: [
    [
      'explosionRight4',
      'explosionRight3',
      'explosionRight2',
      'explosionRight1',
      'explosionRight2',
      'explosionRight3',
      'explosionRight4',
    ],
    800,
  ],
} as const

export function makeAnimation(key: keyof typeof animations) {
  if (!(key in animations)) {
    console.error(`Анимация ${key} отсутствует!`)
  }

  const [frames, duration] = animations[key]

  return new Animation(Array.from(frames), duration)
}
