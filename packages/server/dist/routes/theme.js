'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.themeRoutes = void 0
const express_1 = __importDefault(require('express'))
const controllers_1 = require('../controllers')
const themeRoutes = express_1.default.Router()
exports.themeRoutes = themeRoutes
themeRoutes.get('/:id', controllers_1.ThemeController.getTheme)
themeRoutes.post('/', controllers_1.ThemeController.postTheme)
themeRoutes.put('/', controllers_1.ThemeController.putTheme)
//# sourceMappingURL=theme.js.map
