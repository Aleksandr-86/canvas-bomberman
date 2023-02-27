import { RootState } from './index'

export const getUser = (state: RootState) => state.user
export const getPlayersStats = (state: RootState) => state.playersStats
export const getCurrentScore = (state: RootState) => state.game.currentScore
export const getGameStatus = (state: RootState) => state.game.status
export const getPosts = (state: RootState) => state.forum.posts
