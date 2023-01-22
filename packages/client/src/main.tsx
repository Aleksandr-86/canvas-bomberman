import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app'
import { ErrorBoundary } from './components/errorBoundary/errorBoundary'
import { startServiceWorker } from './features/game/sw/serviceWorker'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)

startServiceWorker()
