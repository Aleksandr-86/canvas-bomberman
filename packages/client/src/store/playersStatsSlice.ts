import { createSlice } from '@reduxjs/toolkit'

export type PlayerStats = {
  id: number
  place: number
  name: string
  score: number
  games: number
  totalTime: number
}

type PlayersStatsState = PlayerStats[]

const initialState: PlayersStatsState = [
  {
    id: 1,
    place: 1,
    name: 'Bionic',
    score: 27500,
    games: 10,
    totalTime: 61,
  },
  {
    id: 2,
    place: 2,
    name: 'Chrome Road',
    score: 15150,
    games: 5,
    totalTime: 36,
  },
  {
    id: 3,
    place: 3,
    name: 'Bladewatch',
    score: 13500,
    games: 4,
    totalTime: 30,
  },
  {
    id: 4,
    place: 4,
    name: 'Marshmallow',
    score: 12100,
    games: 3,
    totalTime: 23,
  },
  {
    id: 5,
    place: 5,
    name: 'Arctic Realm',
    score: 9800,
    games: 3,
    totalTime: 19,
  },
]

const playersStatsSlice = createSlice({
  name: 'playersStats',
  initialState,
  reducers: {},
})

export const playersStatsReducer = playersStatsSlice.reducer
