import { KeyboardEventHandler, useEffect } from 'react'

const setCanvasBackground = (canvas: HTMLCanvasElement, color: string) => {
  const { width, height } = canvas
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return
  }

  ctx.fillStyle = color
  ctx.fillRect(0, 0, width, height)
  ctx.fillStyle = ''
}

type Vec2 = {
  x: number
  y: number
}

type MakeRectCfg = {
  position: Vec2
  offset: Vec2
  color: string
}

const drawRect = (canvas: HTMLCanvasElement, config: MakeRectCfg) => {
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return
  }

  ctx.fillStyle = config.color
  ctx.fillRect(
    config.offset.y,
    config.offset.x,
    config.position.x,
    config.position.y
  )
  ctx.fillStyle = ''
}

type CanvasKeyboardHandler = KeyboardEventHandler<HTMLCanvasElement>

type ArrowHandlers = {
  left: CanvasKeyboardHandler
  right: CanvasKeyboardHandler
  up: CanvasKeyboardHandler
  down: CanvasKeyboardHandler
}

const ArrowKeys = {
  ArrowLeft: 'left',
  ArrowRigt: 'right',
  ArrowUp: 'up',
  ArrowDown: 'down',
} as const

const useArrowKeys = (handlers: ArrowHandlers) => {
  useEffect(() => {
    const onKeyPress = (event: Event) => {
      const evKey = (event as any).key as keyof typeof ArrowKeys

      const handlerKey = ArrowKeys[evKey]

      handlers[handlerKey](event as any)
    }

    window.addEventListener('keypress', onKeyPress)
    return () => window.removeEventListener('keypress', onKeyPress)
  })
}

export { setCanvasBackground, drawRect, useArrowKeys }
