import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from './helpers/ScrollToTop.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
      <React.StrictMode>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </React.StrictMode>,
  </GoogleOAuthProvider>
)
