import type { RequestHandler } from 'http-proxy-middleware'
import axios from 'axios'
import { API_URL } from '../constants'

const authRoutes = ['/profile', '/game', '/leaderboard']
const signIn = '/sign-in'

export const authMiddleware: RequestHandler = async (req, res, next) => {
  const { cookies } = req.cookies

  if (cookies && 'authCookie' in cookies) {
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
        res.redirect(signIn)
      }

      next()
    }
  } else if (authRoutes.includes(req.originalUrl)) {
    res.redirect(signIn)
  } else {
    next()
  }
}
