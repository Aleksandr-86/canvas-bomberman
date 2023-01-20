import { useEffect, useRef } from 'react'
import { GameOverlay } from '../gameOverlay/gameOverlay'
import styles from './gameDisplay.module.css'

export const GameDisplay: React.FC = () => {
  const gameRef = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = gameRef.current

    if (!canvas) return

    canvas.style.backgroundColor = 'gray'

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = 'yellow'
    ctx.fillRect(20, 20, 60, 60)
  }, [])

  return (
    <div className={styles.gameDisplay}>
      <canvas ref={gameRef} width={1280} height={720} />
      <GameOverlay onReloadGame={() => undefined} />
    </div>
  )
}
