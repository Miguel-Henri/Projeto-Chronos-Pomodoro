import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App} from './App';//importando a função App

createRoot(document.getElementById('root')!).render(//Renderizando as funções
  <StrictMode>
    <App/>
  </StrictMode>,
)
