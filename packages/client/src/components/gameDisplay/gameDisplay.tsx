import { useEffect, useRef } from 'react'

export const GameDisplay = () => {
  const gameRef = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = gameRef.current

    if (!canvas) return

    canvas.style.backgroundColor = 'gray'

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.fillStyle = 'yellow'
    ctx.fillRect(20, 20, 60, 60)
  })

  return <canvas ref={gameRef} width={1280} height={720} />
}
