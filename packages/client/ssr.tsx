import React from 'react'
import { App } from './src/app/app'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  )
}
