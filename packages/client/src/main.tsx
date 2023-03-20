import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/app'
import { ErrorBoundary } from './components/errorBoundary/errorBoundary'
import { startServiceWorker } from './features/game/sw/startServiceWorker'
import { store } from './store'

const rootElement = document.getElementById('root') as HTMLElement

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
)

if (rootElement.innerHTML === '<!--ssr-outlet-->') {
  ReactDOM.createRoot(rootElement).render(app)
} else {
  ReactDOM.hydrateRoot(rootElement, app)
}

if (import.meta.env.PROD) {
  startServiceWorker()
}
