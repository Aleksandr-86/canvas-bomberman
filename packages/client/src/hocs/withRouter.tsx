import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

/* eslint-disable react/display-name */
const withRouter = (component: () => ReactNode) => () => {
  return <BrowserRouter>{component()}</BrowserRouter>
}

export { withRouter }
