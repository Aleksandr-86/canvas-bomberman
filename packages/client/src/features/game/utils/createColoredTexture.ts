export function createColoredTexture(width: number, color: string) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Error getting context')
  canvas.width = width
  canvas.height = width
  ctx.fillStyle = color
  ctx.fillRect(0, 0, width, width)
  const image = new Image()
  image.src = canvas.toDataURL()
  return image
}
