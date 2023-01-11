import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ProfileContextProvider } from './contexts/profileContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </React.StrictMode>,
)
