import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Titulo} from './app'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Titulo/>
  </StrictMode>,
)
