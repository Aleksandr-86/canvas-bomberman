type Box = {
  x: number
  y: number
  width: number
  height: number
}

export const intersect = (rect1: Box, rect2: Box) => {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  )
}

export const inBounds = (boundingRect: Box, rect: Box) => {
  return (
    rect.x < boundingRect.x &&
    rect.y > boundingRect.y &&
    rect.x + rect.width < boundingRect.width &&
    rect.y + rect.height < boundingRect.height
  )
}
