import {
  expressCspHeader,
  SELF,
  NONE,
  NONCE,
  INLINE,
  DATA,
} from 'express-csp-header'

const API_URL = 'https://ya-praktikum.tech'

export const cspMiddleware = () =>
  expressCspHeader({
    directives: {
      'default-src': [SELF, API_URL, 'ws://localhost:24678'],
      'img-src': [SELF, DATA],
      'font-src': [SELF],
      'media-src': [SELF],
      'object-src': [NONE],
      'script-src': [NONCE],
      'style-src': [SELF, INLINE],
      'worker-src': [SELF],
      'frame-ancestors': [NONE],
      'form-action': [NONE],
    },
  })
