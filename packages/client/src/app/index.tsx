import { AppRouting } from '../pages'
import { Provider as StoreProvider } from 'react-redux'
import { store } from '../store'
import { BrowserRouter } from 'react-router-dom'
import './app.module.css'

const App = () => {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <AppRouting />
      </StoreProvider>
    </BrowserRouter>
  )
}

export { App }
