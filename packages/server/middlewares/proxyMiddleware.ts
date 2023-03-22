import { API_URL } from '../constants'
import {
  createProxyMiddleware,
  fixRequestBody,
  RequestHandler,
  responseInterceptor,
} from 'http-proxy-middleware'
import { User } from '../models'

const onProxyRes = responseInterceptor(async (buf, _, req) => {
  if (req.url?.includes('/auth/user')) {
    try {
      const user = JSON.parse(buf.toString())

      if (user?.id) {
        User.upsert({
          ya_id: user.id,
          ya_login: user.login,
          display_name: user.display_name,
          avatar: user.avatar,
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  return buf
})

export const proxyMiddleware: RequestHandler = (req, res, next) => {
  return createProxyMiddleware({
    target: API_URL,
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
    cookieDomainRewrite: { 'ya-praktikum.tech': req.hostname },
    selfHandleResponse: false,
    logLevel: 'info',
    onProxyReq: fixRequestBody,
    onProxyRes,
  })(req, res, next)
}
