import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Titulo} from './app'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Ola mundo</h1>
    <Titulo/>
  </StrictMode>,
)
