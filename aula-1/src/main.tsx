import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Header } from './components/Header'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
)
