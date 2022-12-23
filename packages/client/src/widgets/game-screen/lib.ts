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

type Coord = {
  x: number
  y: number
}

type Offset = {
  top: number
  left: number
}

type MakeRectCfg = {
  position: Coord
  offset: Offset
  color: string
}

const drawRect = (canvas: HTMLCanvasElement, config: MakeRectCfg) => {
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return
  }

  ctx.fillStyle = config.color
  ctx.fillRect(
    config.offset.top,
    config.offset.left,
    config.position.x,
    config.position.y
  )
  ctx.fillStyle = ''
}

import { KeyboardEvent, KeyboardEventHandler, useEffect } from 'react'

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
