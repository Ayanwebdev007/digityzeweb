import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Platforms from './pages/Platforms';
import Careers from './pages/Careers';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-surface-dark text-text-primary font-sans">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
