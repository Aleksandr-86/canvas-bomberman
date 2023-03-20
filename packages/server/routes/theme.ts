import express from 'express'
import * as ThemeController from '../controllers/themeControllers'

const themeRouter = express.Router()

themeRouter.get('/theme/:id', ThemeController.getTheme)

themeRouter.post('/theme', ThemeController.postTheme)

themeRouter.put('/theme', ThemeController.putTheme)

export { themeRouter }
