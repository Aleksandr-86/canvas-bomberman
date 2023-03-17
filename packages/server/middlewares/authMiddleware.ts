import type { RequestHandler } from 'http-proxy-middleware'
import { authRoutes, redirectRoute } from '../routes'
import axios from 'axios'
import { API_URL } from '../constants'

const isAuthCookie = (cookies: string | undefined) => {
  if (!cookies) {
    return false
  }

  return cookies.split(';').some(cookie => {
    const [key] = cookie.split('=')

    return key.trim() === 'authCookie'
  })
}

export const authMiddleware: RequestHandler = async (req, res, next) => {
  if (isAuthCookie(req.headers.cookie)) {
    try {
      const response = await axios(API_URL + '/auth/user', {
        headers: { Cookie: req.headers.cookie },
      })

      if (response?.data?.id) {
        res.locals.user = response.data
      }

      next()
    } catch (err) {
      res.clearCookie('authCookie')
      res.clearCookie('uuid')

      if (authRoutes.includes(req.originalUrl)) {
        res.redirect(redirectRoute)
      }

      next()
    }
  } else if (authRoutes.includes(req.originalUrl)) {
    res.redirect(redirectRoute)
  } else {
    next()
  }
}
