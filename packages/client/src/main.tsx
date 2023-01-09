import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { ErrorBoundary } from './components/error-boundary/error-boundary'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)
