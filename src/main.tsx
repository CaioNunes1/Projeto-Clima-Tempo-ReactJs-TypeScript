import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{background:'linear-gradient(180deg, #594cee 0%, #8dd0f5 100%)',height:'100vh', width:'100vw'}}>
    <App />
    </div>
  </React.StrictMode>,
)
