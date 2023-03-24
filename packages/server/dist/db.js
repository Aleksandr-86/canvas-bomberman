'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.postgresConnect = void 0
const sequelize_typescript_1 = require('sequelize-typescript')
const models_1 = require('./models')
const {
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
} = process.env
const sequelizeOptions = {
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
}
async function postgresConnect() {
  const sequelize = new sequelize_typescript_1.Sequelize(sequelizeOptions)
  sequelize.addModels([
    models_1.UserTheme,
    models_1.User,
    models_1.Topic,
    models_1.Comment,
  ])
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    console.log('Sequelize running!')
  } catch (error) {
    console.error(error)
  }
  return sequelize
}
exports.postgresConnect = postgresConnect
//# sourceMappingURL=db.js.map
