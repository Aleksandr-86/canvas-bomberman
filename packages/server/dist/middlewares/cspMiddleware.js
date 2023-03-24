'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.cspMiddleware = void 0
const constants_1 = require('../constants')
const express_csp_header_1 = require('express-csp-header')
const cspMiddleware = () =>
  (0, express_csp_header_1.expressCspHeader)({
    directives: {
      'default-src': [
        express_csp_header_1.SELF,
        constants_1.API_URL,
        'ws://localhost:24678',
        'https://ya-praktikum.tech/api/v2/oauth/yandex/service-id',
      ],
      'font-src': [express_csp_header_1.SELF],
      'media-src': [express_csp_header_1.SELF],
      'object-src': [express_csp_header_1.NONE],
      'img-src': ['data:', express_csp_header_1.SELF],
      'script-src': [express_csp_header_1.NONCE],
      'style-src': [express_csp_header_1.SELF, express_csp_header_1.NONCE],
      'worker-src': [express_csp_header_1.SELF],
      'frame-ancestors': [express_csp_header_1.NONE],
      'form-action': [express_csp_header_1.NONE],
    },
  })
exports.cspMiddleware = cspMiddleware
//# sourceMappingURL=cspMiddleware.js.map
