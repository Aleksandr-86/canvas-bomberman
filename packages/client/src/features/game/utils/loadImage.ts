export function loadImage(url: string): Promise<HTMLImageElement> {
  const element = new Image()
  element.src = url

  return new Promise((resolve, reject) => {
    element.onload = () => resolve(element)
    element.onerror = () => reject('error loading image')
  })
}
