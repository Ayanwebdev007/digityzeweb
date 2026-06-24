import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy-loaded page components — each becomes a separate JS chunk
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Industries = lazy(() => import('./pages/Industries'));
const Insights = lazy(() => import('./pages/Insights'));
const InsightDetail = lazy(() => import('./pages/InsightDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Platforms = lazy(() => import('./pages/Platforms'));
const Careers = lazy(() => import('./pages/Careers'));

// Admin routes — Firebase + react-quill-new only load when visiting /admin/*
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const BlogEditor = lazy(() => import('./pages/admin/BlogEditor'));
const ProtectedRoute = lazy(() => import('./components/admin/ProtectedRoute'));

// Minimal loading fallback — keeps CLS low
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-8 h-8 border-3 border-brand-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

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
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
