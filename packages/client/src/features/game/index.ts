import { CAMERA_WIDTH, CAMERA_HEIGHT } from './const'
import { useRef } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { makeBombermanScene } from './bombermanScene'
import { setStatus, GameStatus } from '../../store/gameSlice'
import { Game } from '../game/lib'
import { GameConfig } from './lib'
import { gameEnded } from './gameActions'

export function createGame(config: GameConfig) {
  return new Game(config)
}

export function useGame() {
  const canvasRef = useRef<null | HTMLCanvasElement>(null)
  const gameRef = useRef<null | Game>(null)
  const dispatch = useAppDispatch()

  const endGame = () => {
    gameRef.current?.stop()
    gameRef.current = null
    gameEnded()
  }

  const startGame = () => {
    if (!canvasRef.current) {
      return
    }

    const audioCtx = new AudioContext()

    gameRef.current = createGame({
      width: CAMERA_WIDTH,
      height: CAMERA_HEIGHT,
      backgroundColor: '#64b0ff',
      root: canvasRef.current,
      scene: makeBombermanScene(audioCtx),
    })

    gameRef.current.start()
    dispatch(setStatus(GameStatus.START))
  }

  return {
    endGame,
    startGame,
    canvasRef,
    gameRef,
  }
}
