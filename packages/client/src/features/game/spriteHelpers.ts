import { SceneContext } from './lib/sceneContext'
import { type PointLike, randomInRange } from './utils'
import { CELL_WIDTH, Depth } from './const'
import { ExplosionOrientation } from './types'
import { makeAnimation } from './animationHelpers'
import { BuffStats } from './bombermanScene'

export function makePlayer(scene: SceneContext, position: PointLike) {
  const player = scene.add.sprite(
    position.x,
    position.y,
    'nesBomberman',
    'bombermanDown1',
    CELL_WIDTH,
    CELL_WIDTH,
    Depth.Player
  )

  player.addAnimation({
    left: makeAnimation('bombermanLeft'),
    right: makeAnimation('bombermanRight'),
    up: makeAnimation('bombermanUp'),
    down: makeAnimation('bombermanDown'),
    die: makeAnimation('bombermanDie'),
  })

  return player
}

export function makeSoftWall(scene: SceneContext, position: PointLike) {
  const wall = scene.add.sprite(
    position.x,
    position.y,
    'nesBomberman',
    'wallSoft',
    CELL_WIDTH,
    CELL_WIDTH,
    Depth.Destructable
  )

  wall.addAnimation({ destroy: makeAnimation('softWallDestroy') })

  return wall
}

export function makeBomb(scene: SceneContext, position: PointLike) {
  const bomb = scene.add.sprite(
    position.x,
    position.y,
    'nesBomberman',
    'bomb1',
    CELL_WIDTH,
    CELL_WIDTH,
    Depth.Bomb
  )

  bomb.addAnimation({
    pulse: makeAnimation('bombPulse'),
  })

  return bomb
}

export type EnemyName = 'droplet' | 'baloon' | 'overtimeCoin'

export function makeEnemy(
  scene: SceneContext,
  position: PointLike,
  enemyName: EnemyName
) {
  const enemy = scene.add.sprite(
    position.x,
    position.y,
    'nesBomberman',
    `${enemyName}1`,
    CELL_WIDTH,
    CELL_WIDTH,
    Depth.Enemy + 10
  )

  enemy.addAnimation({
    left: makeAnimation(`${enemyName}Left`),
    right: makeAnimation(`${enemyName}Right`),
    up: makeAnimation(`${enemyName}Up`),
    down: makeAnimation(`${enemyName}Down`),
    die: makeAnimation(`${enemyName}Die`),
  })

  return enemy
}

export function makeExplosion(
  scene: SceneContext,
  position: PointLike,
  orientation: ExplosionOrientation
) {
  const explosion = scene.add.sprite(
    position.x,
    position.y,
    'nesBomberman',
    `${orientation}1`,
    CELL_WIDTH,
    CELL_WIDTH,
    Depth.Enemy
  )

  explosion.addAnimation({
    pulse: makeAnimation(orientation),
  })

  return explosion
}

export function makeBuff(
  scene: SceneContext,
  position: PointLike,
  buffStats: BuffStats
) {
  let possibleBuffs = [
    'bombAmountUp',
    'bombRangeUp',
    'playerSpeedUp',
    'detonator',
    'bombPass',
    'flamePass',
  ]

  let buffKind = ''

  if (!buffStats.bombRangeUp.spawned && buffStats.bombRangeUp.amount === 0) {
    buffKind = 'bombRangeUp'
  } else {
    // Ограничение набора улучшений
    if (
      buffStats.playerSpeedUp.spawned ||
      buffStats.playerSpeedUp.amount >= 2
    ) {
      possibleBuffs = possibleBuffs.filter(buff => buff !== 'playerSpeedUp')
    }

    if (buffStats.detonator.spawned || buffStats.detonator.amount > 0) {
      possibleBuffs = possibleBuffs.filter(buff => buff !== 'detonator')
    }

    if (buffStats.bombPass.spawned || buffStats.bombPass.amount > 0) {
      possibleBuffs = possibleBuffs.filter(buff => buff !== 'bombPass')
    }

    if (buffStats.flamePass.spawned || buffStats.flamePass.amount > 0) {
      possibleBuffs = possibleBuffs.filter(buff => buff !== 'flamePass')
    }

    buffKind = possibleBuffs[randomInRange(0, possibleBuffs.length)]
  }

  // Учёт улучшения
  if (buffKind === 'bombRangeUp') {
    buffStats.bombRangeUp.spawned = true
  } else if (buffKind === 'playerSpeedUp') {
    buffStats.playerSpeedUp.spawned = true
  } else if (buffKind === 'detonator') {
    buffStats.detonator.spawned = true
  } else if (buffKind === 'bombPass') {
    buffStats.bombPass.spawned = true
  } else if (buffKind === 'flamePass') {
    buffStats.flamePass.spawned = true
  }

  const buff = scene.add.sprite(
    position.x,
    position.y,
    'nesBomberman',
    buffKind,
    CELL_WIDTH,
    CELL_WIDTH,
    Depth.Buff
  )

  return buff
}

export function makeDoor(scene: SceneContext, position: PointLike) {
  const door = scene.add.sprite(
    position.x,
    position.y,
    'nesBomberman',
    'door',
    CELL_WIDTH,
    CELL_WIDTH,
    Depth.Door
  )

  return door
}
