import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/Styles/App.css';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ.jsx';
import ContactUs from './components/ContactUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import Investors from './components/Investors.jsx';
import Login from './components/Login';

function App() {

  return (
      <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
