import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/app'
import { ErrorBoundary } from './components/errorBoundary/errorBoundary'
import { startServiceWorker } from './features/game/sw/startServiceWorker'

const rootElement = document.getElementById('root') as HTMLElement

const app = (
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
)

if (rootElement.innerHTML === '<!--ssr-outlet-->') {
  ReactDOM.createRoot(rootElement).render(app)
} else {
  ReactDOM.hydrateRoot(rootElement, app)
}

if (import.meta.env.PROD) {
  startServiceWorker()
}
