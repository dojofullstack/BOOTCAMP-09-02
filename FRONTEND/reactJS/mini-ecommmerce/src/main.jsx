import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Home from './Views/Home.jsx'
import Rutas from './Rutas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

      <Rutas/>
     
  </StrictMode>,
)
