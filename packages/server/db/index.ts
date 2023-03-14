import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'

dotenv.config()

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env

export async function postgressConnect() {
  const client = new Sequelize({
    dialect: 'postgres',
    username: POSTGRES_USER,
    database: POSTGRES_DB,
    password: POSTGRES_PASSWORD,
    port: Number(POSTGRES_PORT),
  })

  try {
    await client.authenticate()
    const res = client.query('SELECT NOW()')
    // @ts-expect-error maybe no rows
    console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now)
  } catch (error) {
    console.error(error)
  }
}
