import { useEffect, useRef } from 'react'
import { setCanvasBackground, drawRect } from './lib'

const GameScreen = () => {
  const gameRef = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = gameRef.current

    if (!canvas) {
      return
    }

    setCanvasBackground(canvas, 'grey')
    drawRect(canvas, {
      position: { x: 120, y: 120 },
      offset: { top: 20, left: 20 },
      color: 'red',
    })
  })

  return <canvas ref={gameRef} width={1280} height={720} />
}

export { GameScreen }
