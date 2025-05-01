import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AfrichainContextProvider from './context/AfrichainContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AfrichainContextProvider>
      <App />
    </AfrichainContextProvider>
  </BrowserRouter>,
)
