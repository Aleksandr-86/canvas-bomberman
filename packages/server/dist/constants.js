'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.LOCAL_ORIGINS = exports.PORT = exports.API_URL = void 0
exports.API_URL = 'https://ya-praktikum.tech/api/v2'
exports.PORT = Number(process.env.PORT) || 3002
exports.LOCAL_ORIGINS = [
  `http://127.0.0.1:${exports.PORT}`,
  `http://localhost:${exports.PORT}`,
]
//# sourceMappingURL=constants.js.map
