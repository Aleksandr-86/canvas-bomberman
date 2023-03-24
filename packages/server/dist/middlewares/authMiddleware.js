'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.authMiddleware = void 0
const axios_1 = __importDefault(require('axios'))
const constants_1 = require('../constants')
const protectedRoutes = ['/profile', '/game', '/leaderboard']
const redirectRoute = '/sign-in'
const authMiddleware = async (req, res, next) => {
  var _a
  if (!req.headers.cookie) {
    if (protectedRoutes.includes(req.originalUrl)) {
      res.redirect(redirectRoute)
    }
  } else {
    try {
      const response = await (0, axios_1.default)(
        constants_1.API_URL + '/auth/user',
        {
          headers: { Cookie: req.headers.cookie },
          withCredentials: true,
        }
      )
      if (
        (_a =
          response === null || response === void 0 ? void 0 : response.data) ===
          null || _a === void 0
          ? void 0
          : _a.id
      ) {
        res.locals.user = response.data
      }
    } catch (err) {
      res.clearCookie('authCookie')
      res.clearCookie('uuid')
      next()
    }
  }
}
exports.authMiddleware = authMiddleware
//# sourceMappingURL=authMiddleware.js.map
