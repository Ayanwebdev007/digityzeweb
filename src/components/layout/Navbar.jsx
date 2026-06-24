import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'Why Us' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/platforms', label: 'Platforms' },
  { path: '/insights', label: 'Insights' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm shadow-blue-900/5 ${isMobileOpen ? 'bg-white' : ''}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            {/* Logo - Increased size and displayed in original colors */}
            <Link to="/" className="flex-shrink-0 relative z-50 py-1" id="nav-logo" onClick={() => setIsMobileOpen(false)}>
              <img
                src="/digityze logo 01.png"
                alt="Digityze International"
                className="h-10 sm:h-12 lg:h-14 w-auto transition-all"
                width={206}
                height={70}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-brand-primary bg-blue-50/80 font-semibold'
                        : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden xl:flex items-center">
              <Link
                to="/contact"
                id="nav-cta"
                className="px-5 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-lg 
                  hover:bg-brand-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="xl:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${
                  isMobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${
                  isMobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${
                  isMobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Moved OUTSIDE header to escape backdrop-blur stacking context */}
      <div
        className={`xl:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-start h-full overflow-y-auto gap-2 px-8 pt-24 pb-12">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileOpen(false)}
              className={({ isActive }) =>
                `text-2xl font-medium py-2.5 transition-all duration-300 ${
                  isActive ? 'text-brand-primary font-semibold' : 'text-slate-600 hover:text-brand-primary'
                }`
              }
              style={{
                transitionDelay: isMobileOpen ? `${i * 50}ms` : '0ms',
                transform: isMobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isMobileOpen ? 1 : 0,
              }}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileOpen(false)}
            className="mt-6 px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg 
              hover:bg-brand-dark transition-all duration-300 flex-shrink-0"
            style={{
              transitionDelay: isMobileOpen ? `${navLinks.length * 50}ms` : '0ms',
              transform: isMobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isMobileOpen ? 1 : 0,
            }}
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </>
  );
}
