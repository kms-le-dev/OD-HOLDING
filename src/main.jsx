import React from 'react'
import ReactDOM from 'react-dom/client'
import emailjs from '@emailjs/browser'
import App from './App.jsx'
import './index.css'

// Initialisation d'EmailJS
emailjs.init("KhurxGWTIehNK31ms")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
