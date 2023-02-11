import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/app'
import { ErrorBoundary } from './components/errorBoundary/errorBoundary'
// import { startServiceWorker } from './features/game/sw/startServiceWorker'
// Тест

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
)

// startServiceWorker()
