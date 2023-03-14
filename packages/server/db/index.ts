import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
import { Topic, User, Comment } from '../models'

dotenv.config()

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env

export async function postgressConnect() {
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

    const user = await User.create({
      comments: [],
      topics: [],
      yandexId: 231,
    })
    console.log(user.id)

    console.log(
      '  ➜ 🎸 User created at: ',
      await User.findAll({ where: { id: { gt: 30000 } } })
    )
  } catch (error) {
    console.error(error)
  }
}
