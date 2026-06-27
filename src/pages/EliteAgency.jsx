import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function EliteAgency() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // JSON-LD Schema for rich snippet SEO ranking
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Digityze International",
        "image": "https://digityzeinternational.com/images/delhi-business.png",
        "@id": "https://digityzeinternational.com/#organization",
        "url": "https://digityzeinternational.com/delhi-software-development-digital-marketing-agency",
        "telephone": "+91-9876543210", 
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Cyber Hub Area",
          "addressLocality": "New Delhi",
          "addressRegion": "Delhi",
          "postalCode": "110001",
          "addressCountry": "IN"
        },
        "description": "Elite software development and digital marketing company for Delhi business owners. Certified Google and Meta Partners."
      },
      {
        "@type": "Service",
        "serviceType": "Software Development & Digital Marketing",
        "provider": {
          "@id": "https://digityzeinternational.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Delhi"
        }
      }
    ]
  };

  return (
    <div className="bg-navy-950 min-h-screen text-white overflow-hidden font-sans">
      <Helmet>
        <title>Top Software Development & Digital Marketing Agency Delhi | Digityze International</title>
        <meta name="description" content="Rank #1 in Delhi with Digityze International. We are certified technology partners helping Delhi business owners dominate through custom software development, SaaS platforms, and automated lead generation." />
        <meta name="keywords" content="software development agency in delhi, tech companies delhi, digital marketing agency delhi, custom software development delhi, top IT company delhi NCR, delhi business owners" />
        <link rel="canonical" href="https://digityzeinternational.com/delhi-software-development-digital-marketing-agency" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
        {/* Background Layer with Parallax effect */}
        <div 
          className="absolute inset-0 z-0 opacity-40 scale-105 transition-transform duration-1000 ease-out"
          style={{ 
            backgroundImage: "url('/images/delhi-tech-hero.png')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        ></div>
        
        {/* Neon Gradient Overlay for blending */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy-950/80 via-navy-900/60 to-navy-950"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-dark border border-brand-accent/30 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-sm font-medium text-cyan-100 uppercase tracking-wider">Trusted by Delhi's Top Business Owners</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Empowering Delhi's <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-brand-accent to-purple-500 animate-gradient-shift bg-[length:200%_auto]">
                Boldest Businesses.
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              We build tech and marketing engines that dominate Delhi.
            </p>

            {/* Google & Meta Partner Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 mb-10">
               <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                  {/* Abstract Google 'G' representation */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="font-bold text-sm tracking-wide">Google Partner</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                  {/* Abstract Meta representation */}
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.53 15.68c-2.48 0-4.5-2.02-4.5-4.5s2.02-4.5 4.5-4.5c1.47 0 2.76.71 3.55 1.8.8-.95 1.94-1.57 3.23-1.57 2.48 0 4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5c-1.47 0-2.76-.71-3.55-1.8-.8.95-1.94 1.57-3.23 1.57zm5.55-7.5c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3zm-7.5 0c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/>
                  </svg>
                  <span className="font-bold text-sm tracking-wide">Meta Business Partner</span>
               </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-brand-accent to-cyan-500 rounded-lg text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,116,237,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-center">
                Speak With Our Experts
              </Link>
              <a href="#services" className="px-8 py-4 glass-card-dark rounded-lg text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 text-center border border-white/20">
                View Our Services
              </a>
            </div>
          </div>
          
          {/* Abstract Floating UI Elements for God-Level Design */}
          <div className="lg:col-span-4 hidden lg:block relative h-[500px] animate-float">
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-brand-accent/30 rounded-full blur-[100px]"></div>
            
            {/* Floating Glassmorphism Cards */}
            <div className="absolute top-10 right-10 p-6 glass-card-strong-dark rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">GBP Ranking</h4>
                  <p className="text-xs text-green-400">#1 Spot in Delhi Secured</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -left-10 p-6 glass-card-strong-dark rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-accent mb-1">
                300%
              </div>
              <p className="text-sm text-slate-300">Avg. ROI for Delhi Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* GOD-LEVEL BENTO BOX SERVICES */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Unmatched Capabilities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Enterprise-grade solutions for Delhi's fastest-growing brands.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
            
            {/* 1. Software Development (Image Background) */}
            <div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-3xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group overflow-hidden relative shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/images/service-dev.png')" }}
              ></div>
              {/* Dark Gradient Overlay so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-end">
                <h3 className="text-3xl font-bold mb-3 text-white drop-shadow-lg">Custom Software Development</h3>
                <p className="text-slate-300 text-lg drop-shadow-md font-medium">High-performance applications that streamline your operations.</p>
                <div className="flex gap-2 mt-6 flex-wrap">
                  {['React', 'Node.js', 'AWS', 'Python'].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-md text-sm text-cyan-300 border border-cyan-500/30">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Digital Marketing (Image Background) */}
            <div className="md:col-span-1 lg:col-span-2 rounded-3xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-500 group relative overflow-hidden shadow-2xl">
               <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/images/service-marketing.png')" }}
               ></div>
               <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-transparent"></div>

               <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Digital Marketing Dominance</h3>
                <p className="text-slate-300 mb-4 max-w-sm">Data-driven campaigns that flood your business with leads.</p>
                <Link to="/contact" className="text-purple-300 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Launch Campaign <span className="text-xl">→</span>
                </Link>
               </div>
            </div>

            {/* 3. Google Business Profile Ranking */}
            <div className="md:col-span-1 lg:col-span-1 glass-card-strong-dark rounded-3xl p-8 border border-white/5 hover:border-green-400/50 transition-all duration-500 group relative">
              <div className="text-green-400 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">#1 GBP Ranking</h3>
              <p className="text-sm text-slate-400">Dominate local search across Delhi NCR.</p>
            </div>

            {/* 4. Premium Design Company */}
            <div className="md:col-span-2 lg:col-span-1 glass-card-strong-dark rounded-3xl p-8 border border-white/5 hover:border-pink-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-end"
                 style={{ background: 'linear-gradient(135deg, rgba(0,26,51,0.9), rgba(157,23,77,0.3))' }}>
               <h3 className="text-xl font-bold mb-1">Elite UI/UX Design</h3>
               <p className="text-sm text-slate-300">Award-winning aesthetics that build instant trust.</p>
            </div>
            
            {/* 5. Tech Consulting */}
             <div className="md:col-span-3 lg:col-span-4 glass-card-strong-dark rounded-3xl p-8 border border-white/5 hover:border-brand-accent/50 transition-all duration-500 group flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">The Tech Backbone for Delhi's Enterprises</h3>
                  <p className="text-slate-400 max-w-3xl">Technology that helps legacy businesses evolve and startups scale.</p>
                </div>
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border border-white/10 group-hover:bg-brand-accent/20 group-hover:scale-110 transition-all">
                  <span className="text-2xl">⚡</span>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* WHY US - FEATURING DELHI BUSINESS OWNERS */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-gradient-to-b from-navy-950 to-navy-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-6">
              By Founders, For Founders
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Delhi's Hustle. <br/><span className="text-cyan-400">Powered by Global Standards.</span></h2>
            <p className="text-slate-300 text-xl mb-8">
              From Okhla to Gurugram, we give you the undeniable advantage.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Certified Google Partner",
                "Meta Business Partner",
                "In-house Delhi Expert Team",
                "Proven Local Case Studies"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="min-w-[24px] h-6 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50">
                    <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            {/* The Generated Business Owners Image */}
            <div className="relative rounded-3xl overflow-hidden glass-card-strong-dark border border-white/10 shadow-2xl z-10 group">
              <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img 
                src="/images/delhi-business.png" 
                alt="Delhi Business Owners collaborating with Digityze" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Stat Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 glass-card-strong-dark backdrop-blur-xl rounded-2xl border border-white/20 z-20 flex items-center justify-between">
                <div>
                  <div className="text-xs text-cyan-300 uppercase font-bold tracking-wider mb-1">Client Success</div>
                  <div className="text-white font-medium">Helping 100+ local businesses scale</div>
                </div>
                <div className="flex -space-x-3">
                   <div className="w-10 h-10 rounded-full bg-navy-800 border-2 border-navy-950 flex items-center justify-center text-xs font-bold">5⭐</div>
                   <div className="w-10 h-10 rounded-full bg-brand-accent border-2 border-navy-950 flex items-center justify-center text-xs font-bold">G</div>
                </div>
              </div>
            </div>
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] bg-cyan-500/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* GOD LEVEL CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto glass-card-strong-dark rounded-[3rem] p-12 md:p-20 text-center border border-cyan-500/20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/30 blur-[120px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">Ready to dominate your industry?</h2>
          <p className="text-xl text-slate-300 mb-10 relative z-10">
            Let's build something extraordinary.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-block px-10 py-5 bg-white text-navy-950 font-bold text-xl rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Get Your Free Growth Audit
            </Link>
            <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-8 py-5 text-white font-bold text-lg hover:text-cyan-300 transition-colors">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
               Call Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
