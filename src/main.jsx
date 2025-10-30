import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// FontAwesome initialization
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faArrowRight, faEnvelope, faPhone, faInstagram, faFacebookF, faTwitter)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
