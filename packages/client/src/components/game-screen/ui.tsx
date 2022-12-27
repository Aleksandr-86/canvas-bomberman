import { useEffect, useRef } from 'react'
import { Container, Game } from '../../features/game/game'

const GameScreen = () => {
  const gameRef = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = gameRef.current

    if (!canvas) {
      return
    }

    const game = new Game({
      root: canvas,
      backgroundColor: 'grey',
      width: 1280,
      heigth: 720,
    })

    const box = new Container({ x: 20, y: 20 }, { x: 40, y: 40 })
    game.add(box)

    game.start()

    window.addEventListener('keydown', () => {
      box.move({ x: 20, y: 0 })
    })
  })

  return <canvas ref={gameRef} width={1280} height={720} />
}

export { GameScreen }
