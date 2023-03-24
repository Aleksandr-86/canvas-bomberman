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
exports.Comment = void 0
const sequelize_typescript_1 = require('sequelize-typescript')
const topic_1 = require('./topic')
const user_1 = require('./user')
let Comment = class Comment extends sequelize_typescript_1.Model {}
__decorate(
  [
    (0, sequelize_typescript_1.BelongsTo)(() => topic_1.Topic),
    __metadata('design:type', topic_1.Topic),
  ],
  Comment.prototype,
  'topic',
  void 0
)
__decorate(
  [
    (0, sequelize_typescript_1.ForeignKey)(() => topic_1.Topic),
    __metadata('design:type', Number),
  ],
  Comment.prototype,
  'topic_id',
  void 0
)
__decorate(
  [
    (0, sequelize_typescript_1.ForeignKey)(() => user_1.User),
    __metadata('design:type', Number),
  ],
  Comment.prototype,
  'author_id',
  void 0
)
__decorate(
  [
    sequelize_typescript_1.NotEmpty,
    sequelize_typescript_1.Column,
    __metadata('design:type', String),
  ],
  Comment.prototype,
  'body',
  void 0
)
__decorate(
  [
    (0, sequelize_typescript_1.Min)(0),
    (0, sequelize_typescript_1.Default)(0),
    sequelize_typescript_1.Column,
    __metadata('design:type', Number),
  ],
  Comment.prototype,
  'like_count',
  void 0
)
__decorate(
  [
    (0, sequelize_typescript_1.Min)(0),
    (0, sequelize_typescript_1.Default)(0),
    sequelize_typescript_1.Column,
    __metadata('design:type', Number),
  ],
  Comment.prototype,
  'dislike_count',
  void 0
)
Comment = __decorate(
  [
    (0, sequelize_typescript_1.Table)({
      tableName: 'comments',
      timestamps: true,
    }),
  ],
  Comment
)
exports.Comment = Comment
//# sourceMappingURL=comment.js.map
