'use strict'
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        var desc = Object.getOwnPropertyDescriptor(m, k)
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k]
            },
          }
        }
        Object.defineProperty(o, k2, desc)
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k
        o[k2] = m[k]
      })
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v })
      }
    : function (o, v) {
        o['default'] = v
      })
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.ssrMiddleware = void 0
const serialize_javascript_1 = __importDefault(require('serialize-javascript'))
const fs_1 = require('fs')
const path = __importStar(require('path'))
const index_1 = require('../index')
const getStyleSheets = async distPath => {
  try {
    const assetPath = path.join(distPath, 'assets')
    const files = await fs_1.promises.readdir(assetPath)
    const cssAssets = files.filter(l => l.endsWith('.css'))
    const allContent = []
    for (const asset of cssAssets) {
      const content = await fs_1.promises.readFile(
        path.join(assetPath, asset),
        'utf-8'
      )
      allContent.push(`<style type="text/css">${content}</style>`)
    }
    return allContent.join('\n')
  } catch {
    return ''
  }
}
const ssrMiddleware = ({ vite, srcPath, distPath }) => {
  const ssrClientPath = require.resolve('client/dist-ssr/ssr.cjs')
  return async (req, res, next) => {
    const url = req.originalUrl
    const styleSheets = getStyleSheets(distPath)
    try {
      let template
      let render
      let prepareStore
      if ((0, index_1.isDev)() && vite) {
        template = await fs_1.promises.readFile(
          path.resolve(srcPath, 'index.html'),
          'utf-8'
        )
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
          .render
        prepareStore = (
          await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
        ).prepareStore
      } else {
        template = await fs_1.promises.readFile(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )
        render = (
          await Promise.resolve().then(() =>
            __importStar(require(ssrClientPath))
          )
        ).render
        prepareStore = (
          await Promise.resolve().then(() =>
            __importStar(require(ssrClientPath))
          )
        ).prepareStore
      }
      const cssAssets = (0, index_1.isDev)() ? await styleSheets : ''
      const store = await prepareStore(url, res.locals.user)
      const appHtml = await render(url, store)
      const appStore = `<script>window.__PRELOADED_STATE__ = ${(0,
      serialize_javascript_1.default)(store.getState(), {
        isJSON: true,
      })}</script>`
      const html = template
        .replace(`<!--ssr-styles-->`, cssAssets)
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`<!--ssr-store-->`, appStore)
        .replace(/<script/g, `<script nonce="${req.nonce}"`)
        .replace(/<style/g, `<style nonce="${req.nonce}"`)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if ((0, index_1.isDev)() && vite) {
        vite.ssrFixStacktrace(e)
      }
      next(e)
    }
  }
}
exports.ssrMiddleware = ssrMiddleware
//# sourceMappingURL=ssrMiddleware.js.map
