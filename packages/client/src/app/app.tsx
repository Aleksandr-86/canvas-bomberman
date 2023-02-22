import { Provider } from 'react-redux'
import { store } from '../store'
import { AppRouting } from '../pages'
import './app.module.css'

export const App = () => {
  return (
    <Provider store={store}>
      <AppRouting />
    </Provider>
  )
}
