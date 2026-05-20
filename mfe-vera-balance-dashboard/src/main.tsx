import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PageRouter } from './PageRouter'
import './scss/main.scss'
import 'antd/dist/reset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<PageRouter />
  </StrictMode>,
)
