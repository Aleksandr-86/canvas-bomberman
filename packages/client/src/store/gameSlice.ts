import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  PLAYER_STARTING_POSITION,
  GRID_HEIGHT,
  GRID_WIDTH,
  EMPTY_FIELD,
  GAME_DURATION,
  BUFF_CHANCE,
  BOMB_FUSE,
  EXPLOSION_RADIUS,
} from '../features/game/const'
import { type TPoint, Point } from '../features/game/utils'
import { Kind } from '../features/game/types'
import { delay } from '../features/game/utils'
import { createSoftWalls } from '../features/game/createSoftWalls'
import { adjacentWalls } from '../features/game/adjacentWalls'
import { AppDispatch, RootState } from './index'
import { randomInRange } from '../features/game/utils/randomInRange'

export enum GameStatus {
  START = 'START',
  IN_PROGRESS = 'IN_PROGRESS',
  END = 'END',
}

type Buff = 'bombRangeUp' | 'playerSpeedUp' | 'bombAmountUp'

type GameState = {
  status: GameStatus
  currentScore: number
  playerPosition: TPoint

  activeBuffs: Record<Buff, boolean>

  doorPosition: TPoint
  bombs: TPoint[]
  softWalls: TPoint[]
  buffs: (TPoint & { kind: Buff })[]

  time: number
}

const INITIAL_STATE: GameState = {
  status: GameStatus.START,
  currentScore: 0,
  doorPosition: Point.New(GRID_WIDTH - 2, GRID_HEIGHT - 2),
  playerPosition: PLAYER_STARTING_POSITION,

  activeBuffs: {
    bombRangeUp: false,
    playerSpeedUp: false,
    bombAmountUp: false,
  },

  bombs: [],
  buffs: [],
  softWalls: createSoftWalls(EMPTY_FIELD, { x: 1, y: 1 }),
  time: GAME_DURATION,
}

const gameSlice = createSlice({
  name: 'game',
  initialState: () => {
    return INITIAL_STATE
  },
  reducers: {
    setStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload
    },
    setCurrentScore: (state, action: PayloadAction<number>) => {
      state.currentScore = action.payload
    },
    playerMoved: (state, { payload }: PayloadAction<TPoint>) => {
      const newPos = {
        x: state.playerPosition.x + payload.x,
        y: state.playerPosition.y + payload.y,
      }

      const cell = EMPTY_FIELD[newPos.y * GRID_WIDTH + newPos.x]

      if (
        !(
          cell === Kind.Empty &&
          !state.softWalls.some(Point.equals(newPos)) &&
          !state.bombs.some(Point.equals(newPos))
        )
      ) {
        return
      }

      state.playerPosition = newPos
      const buff = state.buffs.find(Point.equals(newPos))

      if (buff) {
        state.activeBuffs[buff.kind] = true
        state.buffs = state.buffs.filter(b => b !== buff)
      }
    },
    playerReset: state => {
      state.playerPosition = PLAYER_STARTING_POSITION
    },
    bombPlaced: state => {
      state.bombs.push(state.playerPosition)
    },
    scoreIncreased: (state, { payload }: PayloadAction<number>) => {
      state.currentScore += payload
    },
    bombExploded: (state, { payload }: PayloadAction<TPoint[]>) => {
      state.bombs.pop()

      state.softWalls = state.softWalls.filter(
        wall => !payload.find(Point.equals(wall))
      )
    },
    timerUpdated: (state, { payload }: PayloadAction<number>) => {
      state.time = state.time < 0 ? 0 : state.time - payload * 0.001
    },
    buffCreated: (state, { payload }: PayloadAction<TPoint>) => {
      state.buffs.push({ ...payload, kind: 'bombAmountUp' })
    },
    buffConsumed: state => {
      const { buffs, activeBuffs, playerPosition } = state

      const buff = buffs.find(Point.equals(playerPosition))
      state.buffs = buffs.filter(Point.equals(playerPosition))

      if (buff?.kind) {
        activeBuffs[buff.kind] = true
      }
    },
    buffExpired: (state, { payload }: PayloadAction<Buff>) => {
      state.activeBuffs[payload] = false
    },
  },
})

export const bombSet =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const playerPosition = { ...getState().game.playerPosition }
    dispatch(bombPlaced())
    await delay(BOMB_FUSE)

    const { softWalls, activeBuffs } = getState().game

    const explosionRadius = activeBuffs.bombRangeUp
      ? EXPLOSION_RADIUS * 2
      : EXPLOSION_RADIUS

    console.log(explosionRadius)
    const wallsHit = adjacentWalls(softWalls, playerPosition, explosionRadius)
    dispatch(bombExploded(wallsHit))

    const chance = Math.random() * 100
    if (chance > BUFF_CHANCE) {
      const idx = randomInRange(0, wallsHit.length)
      const buffAt = wallsHit[idx]
      dispatch(buffCreated(buffAt))
    }
  }

let previousTime = performance.now()
let gameIntervalId = 0

export const gameStarted =
  () => (dispatch: AppDispatch, getState: () => RootState) => {
    gameIntervalId = window.setInterval(() => {
      const now = performance.now()
      const dt = now - previousTime
      previousTime = now

      if (getState().game.time > 0) {
        dispatch(timerUpdated(dt))
      }
    }, 1000)
    dispatch(setStatus(GameStatus.IN_PROGRESS))
  }

export const gameEnded = () => (dispatch: AppDispatch) => {
  clearInterval(gameIntervalId)
  dispatch(setStatus(GameStatus.END))
}

export const gameReducer = gameSlice.reducer
export const {
  setStatus,
  setCurrentScore,
  playerMoved,
  playerReset,
  bombPlaced,
  bombExploded,
  scoreIncreased,
  timerUpdated,
  buffCreated,
} = gameSlice.actions
