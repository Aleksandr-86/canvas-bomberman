import express from 'express'
import { ThemeController } from '../controllers'

const themeRoutes = express.Router()

themeRoutes.get('/:id', ThemeController.getTheme)

themeRoutes.post('/', ThemeController.postTheme)

themeRoutes.put('/', ThemeController.putTheme)

export { themeRoutes }
