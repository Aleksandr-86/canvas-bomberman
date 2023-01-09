import { useEffect, useRef } from 'react'
import { Game } from '../../features/game/lib/game'
import { bombermanScene } from '../../features/game/bombermanScene'

export const GameDisplay = () => {
  const gameContainerRef = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    const container = gameContainerRef.current

    if (!container) return

    const game = new Game({
      width: 1280,
      heigth: 720,
      root: container,
      ...bombermanScene,
    })

    game.start()
  })

  return <canvas ref={gameContainerRef}></canvas>
}
