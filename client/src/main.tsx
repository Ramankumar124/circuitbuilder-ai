import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/Store.ts'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackUI from './component/fallbackUI.tsx'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={FallbackUI}>
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </ Provider>
  </ErrorBoundary>
)
