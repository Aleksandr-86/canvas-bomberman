import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

const withRouter = (component: () => ReactNode) => () => {
  return <BrowserRouter>{component()}</BrowserRouter>
}

export { withRouter }
