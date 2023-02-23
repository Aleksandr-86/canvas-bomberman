import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GAME_DURATION, Points } from '../features/game/const'

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
    time: GAME_DURATION,
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
    timerUpdated: (state, { payload }: PayloadAction<number>) => {
      // because of <StrictMode/>, this runs twice
      state.time = state.time <= 0 ? 0 : state.time - payload * 0.001
      state.currentScore += state.time > 0 ? Points.Time : 0
    },
  },
})

export const gameReducer = gameSlice.reducer
export const { setStatus, setCurrentScore, scoreIncreased, timerUpdated } =
  gameSlice.actions
