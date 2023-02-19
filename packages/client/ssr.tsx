import React from 'react'
import { App } from './src/app/app'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { prepareStore } from './src/store/ssrPrepareStore'

export { prepareStore }

export function render(url: string, store) {
  return renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  )
}
