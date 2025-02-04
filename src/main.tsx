import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import  store from './redux/store.ts'
import AuthProvider from './providers/AuthProvider.tsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <AuthProvider> */}
          <App />
        {/* </AuthProvider> */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
