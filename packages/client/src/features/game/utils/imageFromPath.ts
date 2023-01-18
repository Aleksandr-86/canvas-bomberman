export function imageFromSrc(path: string): Promise<HTMLImageElement> {
  const image = new Image()
  image.src = path
  return new Promise((res, rej) => {
    image.onload = () => res(image)
    image.onerror = e => rej(e)
  })
}
