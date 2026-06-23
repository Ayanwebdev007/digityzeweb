import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import Platforms from './pages/Platforms';
import Careers from './pages/Careers';

// Admin imports
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import BlogEditor from './pages/admin/BlogEditor';
import ProtectedRoute from './components/admin/ProtectedRoute';

// Layout wrapper to hide Navbar/Footer on admin routes
function Layout({ children }) {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith('/admin');
  
  if (isAdminPath) {
    return <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-surface-dark text-text-primary font-sans flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/careers" element={<Careers />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/editor" element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            } />
            <Route path="/admin/editor/:id" element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            } />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
