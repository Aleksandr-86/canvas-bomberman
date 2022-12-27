import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'

/* eslint-disable react/display-name */
const withStore = (component: () => ReactNode) => () => {
  return <Provider store={store}>{component()}</Provider>
}
export { withStore }
