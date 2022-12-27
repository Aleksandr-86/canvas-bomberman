import { ReactNode } from 'react'
import { withRouter } from './withRouter'
import { withStore } from './withStore'

const withProviders = (app: () => ReactNode) => withStore(withRouter(app))

export { withProviders }
