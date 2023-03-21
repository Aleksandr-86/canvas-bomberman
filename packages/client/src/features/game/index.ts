import { CAMERA_WIDTH, CAMERA_HEIGHT } from './const'
import { useRef, useEffect } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { makeBombermanScene } from './bombermanScene'
import { setStatus, GameStatus } from '../../store/gameSlice'
import { Game } from '../game/lib'
import { GameConfig } from './lib'
import { gameEnded } from './gameActions'
import { playAudio } from '../utils/playAudio'
import stageStartAudio from '../../assets/audio/stageStart.mp3'
import mainThemeAudio from '../../assets/audio/mainTheme.mp3'

export function createGame(config: GameConfig) {
  return new Game(config)
}

export function useGame() {
  const canvasRef = useRef<null | HTMLCanvasElement>(null)
  const gameRef = useRef<null | Game>(null)
  const shouldRunSecondTime = useRef(true)
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

    // Зацикленное проигрывание главной темы
    const loopedMainTheme = () => {
      playAudio(audioCtx, mainThemeAudio).then(loopedMainTheme)
    }

    // Проигрывание вступительной аудио дорожки
    playAudio(audioCtx, stageStartAudio).then(() => loopedMainTheme())
  }

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas || !shouldRunSecondTime.current) {
      return
    }

    shouldRunSecondTime.current = false

    gameRef.current = new Game({
      height: 640,
      width: 1280,
      backgroundColor: '#64b0ff',
      root: canvas,
      scene: makeBombermanScene(),
    })
  }, [])

  return {
    endGame,
    startGame,
    canvasRef,
    gameRef,
  }
}
