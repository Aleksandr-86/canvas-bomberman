import { Sequelize } from 'sequelize-typescript'
import * as dotenv from 'dotenv'
import { Topic, User, Comment } from '../models'

dotenv.config()

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env

export async function postgressConnectAndSync() {
  const client = new Sequelize({
    dialect: 'postgres',
    username: POSTGRES_USER || 'postgres',
    database: POSTGRES_DB || 'postgres',
    password: POSTGRES_PASSWORD || 'postgres',
    port: Number(POSTGRES_PORT) || 5432,
    models: [Topic, User, Comment],
  })

  try {
    await client.authenticate()

    client.sync()

    console.log('  ➜ 🎸 Db running!')
  } catch (error) {
    console.error(error)
  }
}
