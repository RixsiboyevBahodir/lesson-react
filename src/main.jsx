import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style/style.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/ThemeContext.jsx'
import ErrorBoudri from './components/ErrorBoudri.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <>
  <HelmetProvider>
    <ErrorBoudri>
      <ContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContextProvider>
    </ErrorBoudri>
  </HelmetProvider>
  </>
)
