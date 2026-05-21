import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PageRouter } from './routes/PageRouter'
import './ui/scss/main.scss'
import 'antd/dist/reset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
		<PageRouter />
  </StrictMode>,
)
