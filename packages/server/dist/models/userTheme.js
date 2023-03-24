'use strict'
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v)
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.UserTheme = void 0
const sequelize_typescript_1 = require('sequelize-typescript')
const user_1 = require('./user')
let UserTheme = class UserTheme extends sequelize_typescript_1.Model {}
__decorate(
  [
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.User),
    (0, sequelize_typescript_1.Column)({
      type: sequelize_typescript_1.DataType.INTEGER,
      allowNull: false,
      unique: true,
    }),
    __metadata('design:type', Number),
  ],
  UserTheme.prototype,
  'user_id',
  void 0
)
__decorate(
  [
    (0, sequelize_typescript_1.Column)({
      type: sequelize_typescript_1.DataType.ENUM('light', 'dark'),
      allowNull: false,
    }),
    __metadata('design:type', String),
  ],
  UserTheme.prototype,
  'value',
  void 0
)
UserTheme = __decorate(
  [
    (0, sequelize_typescript_1.Table)({
      timestamps: false,
      paranoid: true,
      tableName: 'user_theme',
    }),
  ],
  UserTheme
)
exports.UserTheme = UserTheme
//# sourceMappingURL=userTheme.js.map
