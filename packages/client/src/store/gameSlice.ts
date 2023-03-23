import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum GameStatus {
  START = 'START',
  IN_PROGRESS = 'IN_PROGRESS',
  END = 'END',
}

export type Buff =
  | 'bombAmountUp'
  | 'bombRangeUp'
  | 'playerSpeedUp'
  | 'detonator'
  | 'bombPass'
  | 'flamePass'

const INITIAL_STATE = {
  status: GameStatus.START,
  currentScore: 0,
  inProgress: true,
  bombAmountUp: 0,
  bombRangeUp: 0,
  playerSpeedUp: 0,
  detonator: 0,
  bombPass: 0,
  flamePass: 0,
}

const gameSlice = createSlice({
  name: 'game',
  initialState: INITIAL_STATE,
  reducers: {
    setStatus: (state, action: PayloadAction<GameStatus>) => {
      state.status = action.payload
    },
    setCurrentScore: (state, action: PayloadAction<number>) => {
      state.currentScore = action.payload
    },
    scoreIncreased: (state, { payload }: PayloadAction<number>) => {
      state.currentScore += payload
    },
    scoreClear: state => {
      state.currentScore = 0
    },
    setProgress: (state, { payload }: PayloadAction<boolean>) => {
      state.inProgress = payload
    },
    incrementBuff: (state, { payload }: PayloadAction<Buff>) => {
      state[payload]++
    },
    resetBuffs: state => {
      state.bombAmountUp = 0
      state.bombRangeUp = 0
      state.playerSpeedUp = 0
      state.detonator = 0
      state.bombPass = 0
      state.flamePass = 0
    },
  },
})

export const gameReducer = gameSlice.reducer
export const {
  setStatus,
  setCurrentScore,
  scoreIncreased,
  scoreClear,
  setProgress,
  incrementBuff,
  resetBuffs,
} = gameSlice.actions
