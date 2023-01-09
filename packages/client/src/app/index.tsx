import { AppRouting } from '../pages'
import { NavigationBar } from '../components/navigation-bar'
import { Provider as StoreProvider } from 'react-redux'
import { store } from '../store'
import { BrowserRouter } from 'react-router-dom'
import './app.module.css'

const App = () => {
  return (
    <BrowserRouter>
      <StoreProvider store={store}>
        <NavigationBar />
        <AppRouting />
      </StoreProvider>
    </BrowserRouter>
  )
}

export { App }
