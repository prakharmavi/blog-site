import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './home.jsx'
import './assets/css/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home />
  </StrictMode>,
)
