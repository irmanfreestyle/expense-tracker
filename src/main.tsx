import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TransactionProvider from "./context/TransactionContext";

import './index.scss'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </React.StrictMode>,
)
