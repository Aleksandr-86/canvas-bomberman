import { Router } from 'express'
import { User } from '../models'

export const routes = Router()

routes.get('/user', async (_, res) => {
  const usr = await User.findAll()

  res.status(201).send(usr[0].createdAt)
})

routes.get('/post', (_, res) => {
  res.status(403).json({ reason: 'unauthorized' })
})

routes.get('/like', (_, res) => {
  res.status(500).json({ reason: 'server error' })
})
