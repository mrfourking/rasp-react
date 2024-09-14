import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Settings } from 'luxon'
import App from './App.tsx'
import './index.css'

Settings.defaultLocale = 'ru'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
