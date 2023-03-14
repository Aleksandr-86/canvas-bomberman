import fs from 'node:fs/promises'
import path from 'node:path'

export async function getStylesheets(assetPath: string) {
  try {
    const files = await fs.readdir(assetPath)
    const cssFileNames = files.filter(filename => filename.endsWith('.css'))
    const styleTagStrings: string[] = []

    for (const fileName of cssFileNames) {
      const content = await fs.readFile(path.join(assetPath, fileName), 'utf-8')
      styleTagStrings.push(`<style type="text/css">${content.trim()}</style>`)
    }

    return styleTagStrings.join('\n')
  } catch {
    return ''
  }
}
