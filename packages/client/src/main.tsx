import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import { ErrorBoundary } from './components/errorBoundary/errorBoundary'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)
