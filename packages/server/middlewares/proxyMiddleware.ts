import { API_URL } from '../constants'
import {
  createProxyMiddleware,
  fixRequestBody,
  RequestHandler,
} from 'http-proxy-middleware'

export const proxyMiddleware: RequestHandler = (req, res, next) => {
  return createProxyMiddleware({
    target: API_URL,
    pathRewrite: { '^/api': '' },
    changeOrigin: true,
    cookieDomainRewrite: { 'ya-praktikum.tech': req.hostname },
    selfHandleResponse: false,
    logLevel: 'info',
    onProxyReq: fixRequestBody,
  })(req, res, next)
}
