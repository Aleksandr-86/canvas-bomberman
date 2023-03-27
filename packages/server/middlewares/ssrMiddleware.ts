import type { RequestHandler } from 'http-proxy-middleware'
import serialize from 'serialize-javascript'
import type { ViteDevServer } from 'vite'
import { promises as fs } from 'fs'
import * as path from 'path'
import { isDev } from '../index'

/**
 * Решение заимствовано отсюда:
 * https://github.com/jonluca/vite-typescript-ssr-react/blob/e8e001903fa46248cf6e2a33ae34aaa579448ea5/server.ts#L12-L26
 */
const getStyleSheets = async (distPath: string) => {
  try {
    const assetPath = path.join(distPath, 'assets')
    const files = await fs.readdir(assetPath)
    const cssAssets = files.filter(l => l.endsWith('.css'))
    const allContent = []
    for (const asset of cssAssets) {
      const content = await fs.readFile(path.join(assetPath, asset), 'utf-8')
      allContent.push(`<style type="text/css">${content}</style>`)
    }

    return allContent.join('\n')
  } catch {
    return ''
  }
}

type SSRParams = {
  vite: ViteDevServer | undefined
  srcPath: string
  distPath: string
}

export const ssrMiddleware = ({
  vite,
  srcPath,
  distPath,
}: SSRParams): RequestHandler => {
  const ssrClientPath = require.resolve('client/dist-ssr/ssr.cjs')

  return async (req: any, res, next) => {
    const url = req.originalUrl
    const styleSheets = getStyleSheets(distPath)

    try {
      let template: string

      let render: (url: string, store: object) => Promise<string>
      let prepareStore: (url: string, user: unknown) => any

      if (isDev() && vite) {
        template = await fs.readFile(
          path.resolve(srcPath, 'index.html'),
          'utf-8'
        )
        template = await vite.transformIndexHtml(url, template)

        render = (await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx')))
          .render
        prepareStore = (
          await vite.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))
        ).prepareStore
      } else {
        template = await fs.readFile(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        )

        render = (await import(ssrClientPath)).render
        prepareStore = (await import(ssrClientPath)).prepareStore
      }

      const cssAssets = isDev() ? await styleSheets : ''
      const store = await prepareStore(url, res.locals.user)
      const appHtml = await render(url, store)

      const appStore = `<script>window.__PRELOADED_STATE__ = ${serialize(
        store.getState(),
        { isJSON: true }
      )}</script>`

      const html = template
        .replace(`<!--ssr-styles-->`, cssAssets)
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`<!--ssr-store-->`, appStore)
        .replace(/<script/g, `<script nonce="${req.nonce}"`)
        .replace(/<style/g, `<style nonce="${req.nonce}"`)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (isDev() && vite) {
        vite.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  }
}
