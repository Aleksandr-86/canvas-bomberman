'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.getStylesheets = void 0
const promises_1 = __importDefault(require('node:fs/promises'))
const node_path_1 = __importDefault(require('node:path'))
async function getStylesheets(assetPath) {
  try {
    const files = await promises_1.default.readdir(assetPath)
    const cssFileNames = files.filter(filename => filename.endsWith('.css'))
    const styleTagStrings = []
    for (const fileName of cssFileNames) {
      const content = await promises_1.default.readFile(
        node_path_1.default.join(assetPath, fileName),
        'utf-8'
      )
      styleTagStrings.push(`<style type="text/css">${content.trim()}</style>`)
    }
    return styleTagStrings.join('\n')
  } catch {
    return ''
  }
}
exports.getStylesheets = getStylesheets
//# sourceMappingURL=getStylesheets.js.map
