import express from 'express'
import { getTheme, postTheme, putTheme } from '../controllers/themeControllers'

const themeRouter = express.Router()

themeRouter.get(`/api/theme/:id`, getTheme)

themeRouter.post(`/api/theme`, postTheme)

themeRouter.put(`/api/theme`, putTheme)

export { themeRouter }
