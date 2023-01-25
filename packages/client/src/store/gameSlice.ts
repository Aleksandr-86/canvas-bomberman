import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PLAYER_STARTING_POSITION, EMPTY_FIELD } from '../features/game/const'
import { Kind } from '../features/game/types'
import { Vec2 } from '../features/game/utils'

export enum GameStatus {
  START = 'START',
  IN_PROGRESS = 'IN_PROGRESS',
  END = 'END',
}

type GameState = {
  status: GameStatus
  currentScore: number
  playerPosition: Vec2
  doorPosition: Vec2
}

const INITIAL_STATE: GameState = {
  status: GameStatus.START,
  currentScore: 0,
  doorPosition: new Vec2(7, 6),
  playerPosition: PLAYER_STARTING_POSITION,
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
    playerMoved: (state, action: PayloadAction<Vec2>) => {
      const newPosition = Vec2.add(state.playerPosition, action.payload)

      if (EMPTY_FIELD[newPosition.y][newPosition.x] === Kind.Empty) {
        state.playerPosition = newPosition
      }
    },
  },
})

export const gameReducer = gameSlice.reducer
export const { setStatus, setCurrentScore, playerMoved } = gameSlice.actions
