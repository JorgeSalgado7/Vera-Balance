import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"

import './sass/main.scss'

import { Login } from './presentation/Login/Login'
import { Appointments } from './presentation/Appointmets/Appointments'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Appointments /> } />
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
