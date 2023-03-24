import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { UserTheme, User, Topic, Comment } from './models'

const {
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
} = process.env

const sequelizeOptions: SequelizeOptions = {
  host: POSTGRES_HOST,
  port: Number(POSTGRES_PORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
}

export async function postgresConnect() {
  const sequelize = new Sequelize(sequelizeOptions)
  sequelize.addModels([UserTheme, User, Topic, Comment])

  try {
    await sequelize.authenticate()

    await sequelize.sync()
  } catch (error) {
    console.error(error)
  }
  return sequelize
}
