import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/layout/Nav.jsx';
import { Footer } from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import ServicesPage from './pages/Services.jsx';
import AboutPage from './pages/About.jsx';
import FAQPage from './pages/FAQ.jsx';
import ContactPage from './pages/Contact.jsx';

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
