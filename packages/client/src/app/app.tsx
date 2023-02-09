import { Provider } from 'react-redux'
import { store } from '../store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './app.module.css'
import { routes } from '../store/routes'

const App = () => {
  const router = createBrowserRouter(routes)

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export { App }
