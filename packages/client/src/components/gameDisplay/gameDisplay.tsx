import { useRef } from 'react'
import { useGame } from '../../features/game'
import { GameOverlay } from '../gameOverlay/gameOverlay'
import { useFullScreen } from '../../hooks/useFullScreen'
import { GameScore } from '../gameScore'
import styles from './gameDisplay.module.css'
import { useAppSelector } from '../../store/hooks'
import { getGameStatus } from '../../store/selectors'
import { GameStatus } from '../../store/gameSlice'

export const GameDisplay: React.FC = () => {
  const canvasWrapperRef = useRef<null | HTMLDivElement>(null)
  useFullScreen(canvasWrapperRef)
  const status = useAppSelector(getGameStatus)
  const { canvasRef, startGame } = useGame()

  return (
    <div className={styles.gameDisplay}>
      <div className={styles.gameDisplayCanvasWrapper} ref={canvasWrapperRef}>
        {status === GameStatus.IN_PROGRESS && <GameScore />}
        <canvas ref={canvasRef} width={1280} height={640} />
        <GameOverlay startGame={startGame} />
      </div>
    </div>
  )
}
