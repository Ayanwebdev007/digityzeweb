import { Link } from 'react-router-dom';

const footerLinks = {
  company: [
    { label: 'Why Us', path: '/about' },
    { label: 'Our Commitment', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Digital Marketing & Leads', path: '/services' },
    { label: 'Custom Software Development', path: '/services' },
    { label: 'SaaS Platform Solutions', path: '/services' },
    { label: 'Daily Task Automation', path: '/services' },
    { label: 'Workflow Optimization', path: '/services' },
  ],
  resources: [
    { label: 'Insights', path: '/insights' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Platforms', path: '/platforms' },
    { label: 'Industries', path: '/industries' },
  ],
};

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-gradient-to-br from-brand-primary via-brand-dark to-brand-darker text-slate-300 border-t border-brand-dark">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/digityze logo 01.png"
                alt="Digityze International"
                className="h-12 lg:h-14 w-auto brightness-0 invert"
                width={206}
                height={70}
              />
            </Link>
            <p className="text-slate-300/80 text-sm leading-relaxed mb-6 max-w-sm">
              Delivering business transformation through technology, strategy, and scalable digital systems. 
              Headquartered in India, serving businesses worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/digityze-international-opc-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 
                  flex items-center justify-center text-slate-300 hover:text-white 
                  hover:bg-brand-accent hover:border-brand-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://x.com/digityzeint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 
                  flex items-center justify-center text-slate-300 hover:text-white 
                  hover:bg-brand-accent hover:border-brand-accent transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/digityzeinternational_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 
                  flex items-center justify-center text-slate-300 hover:text-white 
                  hover:bg-brand-accent hover:border-brand-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 lg:col-start-5">
            <h2 className="text-white font-bold text-xs mb-5 uppercase tracking-wider">Company</h2>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h2 className="text-white font-bold text-xs mb-5 uppercase tracking-wider">Services</h2>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-3">
            <h2 className="text-white font-bold text-xs mb-5 uppercase tracking-wider">Resources</h2>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Middle Tier: Contact & Office */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8">
          {/* Contact Us */}
          <div>
            <h2 className="text-white font-bold text-xs mb-5 uppercase tracking-wider">Contact Us</h2>
            <div className="space-y-5 text-sm text-slate-300">
              <div>
                <a href="mailto:digityzeinternational@gmail.com" className="hover:text-white transition-colors inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-base">digityzeinternational@gmail.com</span>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <a href="tel:+916290840416" className="hover:text-white transition-colors inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-base">+91 6290840416</span>
                </a>
                <a href="tel:+916296314040" className="hover:text-white transition-colors inline-flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-base">+91 6296314040</span>
                </a>
              </div>
            </div>
          </div>

          {/* Registered Office */}
          <div className="md:border-l md:border-white/10 md:pl-12 lg:pl-16 flex flex-col justify-center">
            <h2 className="text-white font-bold text-xs mb-4 uppercase tracking-wider">Registered Office</h2>
            <p className="text-slate-300 text-sm font-medium mb-1.5">DIGITYZE INTERNATIONAL (OPC) PRIVATE LIMITED</p>
            <p className="text-slate-400 text-xs mb-4 tracking-wide">CIN: U62020WB2026OPC288605</p>
            <div className="text-slate-400 text-sm leading-relaxed max-w-sm flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span>
                83, S.P. Mukherjee Road, Kalighat<br/>
                Kolkata - 700026, West Bengal, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-xs">
              © {new Date().getFullYear()} DIGITYZE INTERNATIONAL (OPC) PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 text-xs hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 text-xs hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
