import type { RequestHandler } from 'http-proxy-middleware'
import type { ViteDevServer } from 'vite'
declare type SSRParams = {
  vite: ViteDevServer | undefined
  srcPath: string
  distPath: string
}
export declare const ssrMiddleware: ({
  vite,
  srcPath,
  distPath,
}: SSRParams) => RequestHandler
export {}
//# sourceMappingURL=ssrMiddleware.d.ts.map
