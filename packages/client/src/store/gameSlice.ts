import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum GameStatus {
  START = `start`,
  IN_PROGRESS = `inProgress`,
  END = `end`,
}

type State = {
  status: GameStatus
  currentScore: number
}

const INITIAL_STATE: State = {
  status: GameStatus.START,
  currentScore: 0,
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
  },
})

export const gameReducer = gameSlice.reducer
export const { setStatus, setCurrentScore } = gameSlice.actions
