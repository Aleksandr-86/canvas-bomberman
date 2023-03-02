import { useEffect, useRef } from 'react'
import { Game } from '../../features/game/lib'
import { GameOverlay } from '../gameOverlay/gameOverlay'
import { useFullScreen } from '../../hooks/useFullScreen'
import styles from './gameDisplay.module.css'
import { bombermanScene } from '../../features/game/bombermanScene'
import { GameScore } from '../gameScore'

export const GameDisplay: React.FC = () => {
  const gameRef = useRef<null | HTMLCanvasElement>(null)
  const canvasWrapperRef = useRef<null | HTMLDivElement>(null)
  const shouldRunSecondTime = useRef(true)

  useFullScreen(canvasWrapperRef)

  useEffect(() => {
    const canvas = gameRef.current

    if (!canvas || !shouldRunSecondTime.current) {
      return
    }

    shouldRunSecondTime.current = false
    /**
     * TODO: Данный участок следует обработать после доработки
     * движка по задачи № 75. Ответственный - Aleksandr-86.
     */
    const game = new Game({
      height: 640,
      width: 1280,
      backgroundColor: '#64b0ff',
      root: canvas,
      scene: bombermanScene,
    })
    game.start()

    return () => {
      game.stop()
    }
  }, [])

  return (
    <div className={styles.gameDisplay}>
      <div className={styles.gameDisplayCanvasWrapper} ref={canvasWrapperRef}>
        <GameScore />
        <canvas ref={gameRef} width={1280} height={640} />
        <GameOverlay onReloadGame={() => undefined} />
      </div>
    </div>
  )
}
