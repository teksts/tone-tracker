import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/index.css"
import WordProvider from './context/wordContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WordProvider>
      <App />
    </WordProvider>
  </React.StrictMode>,
)
