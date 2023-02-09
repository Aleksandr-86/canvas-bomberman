import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app'
import { ErrorBoundary } from './components/errorBoundary/errorBoundary'
// import { startServiceWorker } from './features/game/sw/startServiceWorker'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <StrictMode>
//     <ErrorBoundary>
//       <App />
//     </ErrorBoundary>
//   </StrictMode>
// )

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)

// startServiceWorker()
