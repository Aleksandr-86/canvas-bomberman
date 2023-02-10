import { Provider } from 'react-redux'
import { store } from '../store'

import './app.module.css'
import { AppRouting } from '../pages'

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouting />
    </Provider>
  )
}
