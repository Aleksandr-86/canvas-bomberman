import { GameScore } from '../gameScore'
import { useEffect, useRef } from 'react'
import { bombermanScene } from '../../features/game/bombermanScene'
import { Game } from '../../features/game/lib'
import { GameOverlay } from '../gameOverlay/gameOverlay'
import { CAMERA_HEIGHT, CAMERA_WIDTH } from '../../features/game/const'
import styles from './gameDisplay.module.css'

export const GameDisplay: React.FC = () => {
  const gameRef = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = gameRef.current

    if (!canvas) return

    const game = new Game({
      height: CAMERA_HEIGHT,
      width: CAMERA_WIDTH,
      backgroundColor: '#64b0ff',
      root: canvas,
      scene: bombermanScene,
    })

    game.start()
    return () => game.stop()
  }, [])

  return (
    <div className={styles.gameDisplay}>
      <GameScore />
      <canvas ref={gameRef} width={CAMERA_WIDTH} height={CAMERA_HEIGHT} />
      <GameOverlay onReloadGame={() => undefined} />
    </div>
  )
}
