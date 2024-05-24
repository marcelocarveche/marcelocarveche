import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalProvider } from './proxies'
import { Router } from './routes'

ReactDOM.createRoot(document.getElementById('main')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  </React.StrictMode>
)
