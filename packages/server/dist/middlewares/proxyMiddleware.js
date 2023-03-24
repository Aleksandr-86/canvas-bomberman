'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.proxyMiddleware = void 0
const constants_1 = require('../constants')
const http_proxy_middleware_1 = require('http-proxy-middleware')
const models_1 = require('../models')
const onProxyRes = (0, http_proxy_middleware_1.responseInterceptor)(
  async (buf, _, req) => {
    var _a
    if (
      (_a = req.url) === null || _a === void 0
        ? void 0
        : _a.includes('/auth/user')
    ) {
      try {
        const user = JSON.parse(buf.toString())
        if (user === null || user === void 0 ? void 0 : user.id) {
          models_1.User.upsert({
            ya_id: user.id,
            ya_login: user.login,
            display_name: user.display_name,
            avatar: user.avatar,
          })
        }
      } catch (error) {
        console.error(error)
      }
    }
    return buf
  }
)
const proxyMiddleware = (req, res, next) => {
  return (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: constants_1.API_URL,
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
    cookieDomainRewrite: 'ya-praktikum.tech',
    selfHandleResponse: false,
    logLevel: 'info',
    onProxyReq: http_proxy_middleware_1.fixRequestBody,
    onProxyRes,
  })(req, res, next)
}
exports.proxyMiddleware = proxyMiddleware
//# sourceMappingURL=proxyMiddleware.js.map
