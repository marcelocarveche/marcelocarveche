import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes'

ReactDOM.createRoot(document.getElementById('main')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
