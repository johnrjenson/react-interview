import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { worker } from './mocks/browser'

worker.start({
  serviceWorker: {
    // Points to the custom location of the Service Worker file.
    url: `${import.meta.env.BASE_URL}mockServiceWorker.js`
  }
}).then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
})
