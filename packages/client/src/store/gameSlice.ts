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
    return {
      ...INITIAL_STATE,
      field: fillSoftWalls(EMPTY_FIELD),
    }
  },
  reducers: {
    setStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload
    },
    setCurrentScore: (state, action: PayloadAction<number>) => {
      state.currentScore = action.payload
    },
    playerMoved: (state, { payload }: PayloadAction<Vec2>) => {
      state.playerPosition = payload
    },
    playerReset: state => {
      state.playerPosition = PLAYER_STARTING_POSITION
    },
    bombPlaced: (state, { payload: { x, y } }: PayloadAction<Vec2>) => {
      state.field[y][x] = Kind.Bomb
    },
    scoreIncreased: (state, { payload }: PayloadAction<number>) => {
      state.currentScore += payload
    },
    bombExploded: ({ field }, { payload }: PayloadAction<Vec2>) => {
      explodeAdjacentSoftWalls(field, payload)
    },
    timerUpdated: (state, { payload }: PayloadAction<number>) => {
      state.time -= payload * 0.001 /* payload is in ms */
    },
  },
})

export const bombSet = (pos: Vec2) => async (dispatch: AppDispatch) => {
  dispatch(bombPlaced(pos))
  await delay(800)
  dispatch(bombExploded(pos))
}

let previousTime = performance.now()
let gameIntervalId = 0

export const gameStarted = () => (dispatch: AppDispatch) => {
  gameIntervalId = window.setInterval(() => {
    const now = performance.now()
    const dt = now - previousTime
    previousTime = now
    dispatch(timerUpdated(dt))
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
} = gameSlice.actions
