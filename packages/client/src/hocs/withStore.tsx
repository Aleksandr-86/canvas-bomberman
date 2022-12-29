import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

const withStore = (component: () => ReactNode) => () => {
  return <Provider store={store}>{component()}</Provider>
}
export { withStore }
