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
exports.isDev = void 0
const dotenv = __importStar(require('dotenv'))
dotenv.config()
const middlewares_1 = require('./middlewares')
const cors_1 = __importDefault(require('cors'))
const vite_1 = require('vite')
const path_1 = __importDefault(require('path'))
const express_1 = __importDefault(require('express'))
const db_1 = require('./db')
const routes_1 = require('./routes')
const cookie_parser_1 = __importDefault(require('cookie-parser'))
const constants_1 = require('./constants')
const isDev = () => process.env.NODE_ENV === 'development'
exports.isDev = isDev
async function createServer() {
  const app = (0, express_1.default)()
  app.use((0, cors_1.default)())
  if (!(0, exports.isDev)()) {
    app.use((0, middlewares_1.cspMiddleware)())
  }
  app.use((0, cookie_parser_1.default)())
  const distPath = path_1.default.dirname(
    require.resolve('client/dist/index.html')
  )
  const srcPath = path_1.default.dirname(require.resolve('client'))
  app.use('/api', routes_1.apiRoutes)
  let vite
  if ((0, exports.isDev)()) {
    vite = await (0, vite_1.createServer)({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    })
    app.use(vite.middlewares)
  }
  app.use(
    '/assets',
    express_1.default.static(path_1.default.resolve(distPath, 'assets'))
  )
  app.use('*', (0, middlewares_1.ssrMiddleware)({ vite, srcPath, distPath }))
  return app
}
async function start() {
  await (0, db_1.postgresConnect)()
  const server = await createServer()
  server.listen(constants_1.PORT, () => {
    console.log(`  ➜ 🎸 Сервер слушает порт: ${constants_1.PORT}`)
  })
}
start()
//# sourceMappingURL=index.js.map
