import { useEffect, useRef } from 'react'
import { bombermanScene } from '../../features/game/bombermanScene'
import { Game } from '../../features/game/lib'
import { GameOverlay } from '../gameOverlay/gameOverlay'
import { useFullScreen } from '../../hooks/useFullScreen'
import styles from './gameDisplay.module.css'

export const GameDisplay: React.FC = () => {
  const gameRef = useRef<null | HTMLCanvasElement>(null)
  const canvasWrapperRef = useRef<null | HTMLDivElement>(null)

  useFullScreen(canvasWrapperRef)

  useEffect(() => {
    const canvas = gameRef.current

    if (!canvas) return

    const game = new Game({
      heigth: 720,
      width: 1280,
      backgroundColor: 'teal',
      root: canvas,
      ...bombermanScene,
    })

    game.start()
  }, [])

  return (
    <div className={styles.gameDisplay}>
      <div className={styles.gameDisplayCanvasWrapper} ref={canvasWrapperRef}>
        <canvas ref={gameRef} width={1280} height={720} />
        <GameOverlay onReloadGame={() => undefined} />
      </div>
    </div>
  )
}
