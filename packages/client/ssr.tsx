import React from 'react'
import { App } from './src/app/app'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { Router } from 'react-router-dom'

// import { store } from '../store'
// import { store } from './src/store/'

// export function render(url) {
//   return renderToString(
//     <StaticRouter location={url}>
//       <App />
//     </StaticRouter>
//   )
// }

export function render(url: string) {
  console.log(url)

  return renderToString(
    // <Provider store={store}>
    <StaticRouter location={url}>
      {/* <ErrorBoundary> */}
      <App />
      {/* </ErrorBoundary> */}
    </StaticRouter>
    // </Provider>
  )
}
