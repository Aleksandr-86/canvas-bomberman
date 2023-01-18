import { white, black } from '../data/fallbackTexture.json'
import { imageFromSrc } from '../utils/imageFromPath'

export async function loadTextures() {
  const [White, Black] = await Promise.all([
    imageFromSrc(white),
    imageFromSrc(black),
  ])

  return {
    White,
    Black,
  }
}
