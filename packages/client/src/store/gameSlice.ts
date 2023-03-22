import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum GameStatus {
  START = 'START',
  IN_PROGRESS = 'IN_PROGRESS',
  END = 'END',
}

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    status: GameStatus.START,
    currentScore: 0,
    inProgress: true,
  },
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
  },
})

export const gameReducer = gameSlice.reducer
export const {
  setStatus,
  setCurrentScore,
  scoreIncreased,
  scoreClear,
  setProgress,
} = gameSlice.actions
