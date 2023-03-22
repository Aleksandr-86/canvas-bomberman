import type { RequestHandler } from 'http-proxy-middleware'
import axios from 'axios'
import { API_URL } from '../constants'

const protectedRoutes = ['/profile', '/game', '/leaderboard']
const redirectRoute = '/sign-in'

export const authMiddleware: RequestHandler = async (req, res, next) => {
  if (!req.headers.cookie) {
    if (protectedRoutes.includes(req.originalUrl)) {
      res.redirect(redirectRoute)
    }
  } else {
    try {
      const response = await axios(API_URL + '/auth/user', {
        headers: { Cookie: req.headers.cookie },
        withCredentials: true,
      })

      if (response?.data?.id) {
        res.locals.user = response.data
      }
    } catch (err) {
      res.clearCookie('authCookie')
      res.clearCookie('uuid')

      next()
    }
  }
}
