import { API_URL } from '../constants'
import { expressCspHeader, SELF, NONE, NONCE, INLINE } from 'express-csp-header'

export const cspMiddleware = () =>
  expressCspHeader({
    directives: {
      'default-src': [
        SELF,
        API_URL,
        'ws://localhost:24678',
        'https://ya-praktikum.tech/api/v2/oauth/yandex/service-id',
      ],
      'font-src': [SELF],
      'media-src': [SELF],
      'object-src': [NONE],
      'img-src': ['data:', SELF],
      'script-src': [NONCE],
      'style-src': [SELF, NONCE],
      'worker-src': [SELF],
      'frame-ancestors': [NONE],
      'form-action': [NONE],
    },
  })
