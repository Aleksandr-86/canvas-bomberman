import { BrowserRouter } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'

import { AppRouting } from '../pages'
import { store } from '../store'

import './app.module.css'

export const App = () => {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <AppRouting />
      </StoreProvider>
    </BrowserRouter>
  )
}
