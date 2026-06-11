// forced compile test
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeader from '../components/common/SectionHeader';
import Icon from '../components/common/Icon';
import { caseStudies } from '../data/content';

/* ============================================
   REDESIGNED PREMIUM HOME PAGE
   ============================================ */

// ─── Hero Section with Edge-Spaced Banner & Customer Success Cards ───
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/team_collaboration.png',
      badge: 'SaaS Platforms',
      title: 'Launch and Scale Your Custom Platform',
      desc: 'We build secure, cloud-hosted subscription platforms for teams worldwide.',
      actionText: 'Build Your SaaS',
      link: '/services'
    },
    {
      image: '/images/marketing_leads.png',
      badge: 'Digital Marketing & Leads',
      title: 'Get Active Business Leads Automatically',
      desc: 'Indian business owners getting new client inquiries daily via targeted social ads.',
      actionText: 'Get Leads Now',
      link: '/contact'
    },
    {
      image: '/images/happy_client.png',
      badge: 'Custom Billing Portals',
      title: 'Save 15+ Hours of Paperwork Weekly',
      desc: 'Eliminate manual billing mistakes with simple, mobile-friendly order trackers.',
      actionText: 'Explore Software',
      link: '/services'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="relative bg-white pt-14 sm:pt-16 lg:pt-18 pb-8">
      {/* Edge-Spaced Rounded Visual Banner Slider */}
      <div className="mx-4 sm:mx-8 lg:mx-12 mt-2 mb-2 rounded-[32px] overflow-hidden relative h-[450px] sm:h-[500px] lg:h-[550px] bg-slate-900 border border-slate-800">
        
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image of Happy Customers */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Rich gradient overlay for high text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent max-sm:bg-gradient-to-t max-sm:from-slate-900/95 max-sm:via-slate-900/60 max-sm:to-transparent" />
            
            {/* Content Box Overlaid */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 pb-14 sm:p-12 sm:pb-12 lg:p-20 text-left max-w-2xl z-20">
              <ScrollReveal>
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold sm:font-semibold tracking-wider uppercase bg-blue-500/80 text-white border border-white/10 w-max mb-3 sm:mb-4 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  {slide.badge}
                </span>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-[22px] leading-[1.2] sm:text-4xl lg:text-5xl font-bold sm:leading-[1.15] tracking-tight text-white mb-2 sm:mb-4">
                  {slide.title}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-xs sm:text-base text-slate-200 mb-5 sm:mb-8 max-w-xl font-medium leading-snug sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {slide.desc}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                  <Link
                    to={slide.link}
                    className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3.5 bg-brand-accent text-white font-bold sm:font-semibold text-xs sm:text-base rounded-lg sm:rounded-xl
                      hover:bg-brand-accent-dark transition-all duration-300
                      hover:-translate-y-0.5 active:translate-y-0 group w-auto"
                  >
                    {slide.actionText}
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        ))}
        
        {/* Slide Indicator Dots */}
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Customer Success Gallery directly under the banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-16 relative">
        <ScrollReveal delay={100}>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-brand-primary border border-blue-100 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              Customer Success Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Real Growth. Real Customers.
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mt-4 font-medium">
              Direct operational impact delivered to happy business owners worldwide.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: WhatsApp Leads Ads (2/3 Split Width) */}
          <ScrollReveal delay={150} className="lg:col-span-2">
            <div className="group relative bg-navy-50 rounded-3xl border border-navy-100 hover:border-emerald-300 hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row h-full min-h-[380px] overflow-hidden">
              
              {/* Soft colorful gradient spotlight backdrop */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-50/60 to-teal-50/20 blur-3xl pointer-events-none -z-10" />
              
              {/* Left Side: Full-Bleed Portrait */}
              <div className="w-full md:w-5/12 h-64 md:h-auto relative flex-shrink-0 overflow-hidden bg-slate-50 border-r border-navy-100/60">
                <img 
                  src="/images/customer_marketing.png" 
                  alt="Anita Sen"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Status Indicator */}
                <span className="absolute bottom-4 right-4 flex h-3.5 w-3.5 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                </span>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-7/12 p-8 flex flex-col justify-between relative z-10">
                <div>
                  {/* Service taken - BIG AND BOLD */}
                  <div className="mb-6">
                    <span className="text-[11px] font-extrabold text-emerald-600 uppercase tracking-widest block mb-1">Service Taken</span>
                    <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent leading-none">
                      WHATSAPP LEAD ADS
                    </h3>
                  </div>

                  <div className="w-full h-px bg-slate-100 my-4" />

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-slate-800 font-extrabold text-base">Anita Sen</h4>
                      <p className="text-slate-500 text-xs font-semibold">Founder, Sen E-Commerce</p>
                    </div>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                      Gets 100+ inquiries daily directly on WhatsApp, removing manual sales follow-ups.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Impact</span>
                  <span className="px-4 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 font-black text-xl tracking-tight border border-emerald-100">
                    +120% Leads
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Custom Software (1/3 Width Card) */}
          <ScrollReveal delay={250} className="lg:col-span-1">
            <div className="group relative bg-navy-50 rounded-3xl border border-navy-100 hover:border-cyan-300 hover:-translate-y-1 transition-all duration-500 flex flex-col h-full justify-between overflow-hidden">
              
              {/* Soft colorful gradient spotlight backdrop */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-50/60 to-blue-50/20 blur-3xl pointer-events-none -z-10" />

              {/* Top Full-Bleed Image */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-50 border-b border-navy-100/60 flex-shrink-0">
                <img 
                  src="/images/customer_software.png" 
                  alt="Rajesh Kumar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Status Indicator */}
                <span className="absolute bottom-3 right-3 flex h-3 w-3 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
              </div>

              {/* Bottom Content */}
              <div className="p-8 flex-grow flex flex-col justify-between relative z-10">
                <div>
                  {/* Service taken - BIG AND BOLD */}
                  <div className="mb-4">
                    <span className="text-[11px] font-extrabold text-cyan-600 uppercase tracking-widest block mb-1">Service Taken</span>
                    <h3 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent leading-none">
                      BILLING PORTAL
                    </h3>
                  </div>

                  <div className="w-full h-px bg-slate-100 my-3" />

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-slate-800 font-extrabold text-base">Rajesh Kumar</h4>
                      <p className="text-slate-500 text-xs font-semibold">Owner, Kumar Retail Chains</p>
                    </div>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                      Saves 15 hours of manual register bookkeeping weekly with automated invoice entries.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Impact</span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-cyan-50 text-cyan-700 font-black text-sm tracking-tight border border-cyan-100">
                    15+ Hrs Saved
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: SaaS Platforms (3/3 Full-Width Banner) */}
          <ScrollReveal delay={350} className="lg:col-span-3">
            <div className="group relative bg-navy-50 rounded-3xl border border-navy-100 hover:border-violet-300 hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row h-full min-h-[320px] overflow-hidden">
              
              {/* Soft colorful gradient spotlight backdrop */}
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-violet-50/60 to-fuchsia-50/20 blur-3xl pointer-events-none -z-10" />

              {/* Left Content */}
              <div className="w-full md:w-8/12 p-8 flex flex-col justify-between order-2 md:order-1 relative z-10">
                <div>
                  {/* Service taken - BIG AND BOLD */}
                  <div className="mb-6">
                    <span className="text-[11px] font-extrabold text-violet-600 uppercase tracking-widest block mb-1">Service Taken</span>
                    <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent leading-none">
                      MULTI-TENANT SAAS
                    </h3>
                  </div>

                  <div className="w-full h-px bg-slate-100 my-4" />

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-slate-800 font-extrabold text-base">Dr. Anjali Mehta</h4>
                      <p className="text-slate-500 text-xs font-semibold">Director, Mehta Clinics</p>
                    </div>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed">
                      Hosts records securely and automates clinic bookings across 5+ hospital locations.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Client Impact</span>
                  <span className="px-4 py-1.5 rounded-xl bg-violet-50 text-violet-700 font-black text-xl tracking-tight border border-violet-100">
                    99.9% Uptime
                  </span>
                </div>
              </div>

              {/* Right Side: Full-Bleed Portrait */}
              <div className="w-full md:w-4/12 h-64 md:h-auto relative flex-shrink-0 order-1 md:order-2 overflow-hidden bg-slate-50 border-l border-navy-100/60">
                <img 
                  src="/images/customer_saas.png" 
                  alt="Dr. Anjali Mehta"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Status Indicator */}
                <span className="absolute bottom-3 right-3 flex h-3.5 w-3.5 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-violet-500"></span>
                </span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

// ─── Global Reach / Country Scale ───
function GlobalReach() {
  const countries = [
    {
      name: 'India',
      hub: 'Engineering HQ',
      flag: (
        <svg className="w-10 h-7 rounded border border-slate-200/50" viewBox="0 0 900 600">
          <rect width="900" height="200" fill="#FF9933"/>
          <rect y="200" width="900" height="200" fill="#FFFFFF"/>
          <rect y="400" width="900" height="200" fill="#128807"/>
          <circle cx="450" cy="300" r="60" fill="none" stroke="#000080" strokeWidth="6"/>
          <circle cx="450" cy="300" r="10" fill="#000080"/>
        </svg>
      )
    },
    {
      name: 'United States',
      hub: 'Commercial Ops',
      flag: (
        <svg className="w-10 h-7 rounded border border-slate-200/50" viewBox="0 0 19 10">
          <rect width="19" height="10" fill="#B22234"/>
          <rect y="0.77" width="19" height="0.77" fill="#FFFFFF"/>
          <rect y="2.31" width="19" height="0.77" fill="#FFFFFF"/>
          <rect y="3.85" width="19" height="0.77" fill="#FFFFFF"/>
          <rect y="5.38" width="19" height="0.77" fill="#FFFFFF"/>
          <rect y="6.92" width="19" height="0.77" fill="#FFFFFF"/>
          <rect y="8.46" width="19" height="0.77" fill="#FFFFFF"/>
          <rect width="7.6" height="5.38" fill="#3C3B6E"/>
          <circle cx="1.0" cy="1.0" r="0.15" fill="#FFFFFF"/>
          <circle cx="2.5" cy="1.0" r="0.15" fill="#FFFFFF"/>
          <circle cx="4.0" cy="1.0" r="0.15" fill="#FFFFFF"/>
          <circle cx="5.5" cy="1.0" r="0.15" fill="#FFFFFF"/>
          <circle cx="6.6" cy="1.0" r="0.15" fill="#FFFFFF"/>
          <circle cx="1.75" cy="2.2" r="0.15" fill="#FFFFFF"/>
          <circle cx="3.25" cy="2.2" r="0.15" fill="#FFFFFF"/>
          <circle cx="4.75" cy="2.2" r="0.15" fill="#FFFFFF"/>
          <circle cx="6.0" cy="2.2" r="0.15" fill="#FFFFFF"/>
          <circle cx="1.0" cy="3.4" r="0.15" fill="#FFFFFF"/>
          <circle cx="2.5" cy="3.4" r="0.15" fill="#FFFFFF"/>
          <circle cx="4.0" cy="3.4" r="0.15" fill="#FFFFFF"/>
          <circle cx="5.5" cy="3.4" r="0.15" fill="#FFFFFF"/>
          <circle cx="6.6" cy="3.4" r="0.15" fill="#FFFFFF"/>
          <circle cx="1.75" cy="4.4" r="0.15" fill="#FFFFFF"/>
          <circle cx="3.25" cy="4.4" r="0.15" fill="#FFFFFF"/>
          <circle cx="4.75" cy="4.4" r="0.15" fill="#FFFFFF"/>
          <circle cx="6.0" cy="4.4" r="0.15" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: 'United Kingdom',
      hub: 'Client Support',
      flag: (
        <svg className="w-10 h-7 rounded border border-slate-200/50" viewBox="0 0 20 10">
          <rect width="20" height="10" fill="#00247D"/>
          <path d="M0,0 L20,10 M0,10 L20,0" stroke="#FFFFFF" strokeWidth="2"/>
          <path d="M0,0 L20,10 M0,10 L20,0" stroke="#CF142B" strokeWidth="1"/>
          <path d="M10,0 V10 M0,5 H20" stroke="#FFFFFF" strokeWidth="3.5"/>
          <path d="M10,0 V10 M0,5 H20" stroke="#CF142B" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'United Arab Emirates',
      hub: 'Deployment Hub',
      flag: (
        <svg className="w-10 h-7 rounded border border-slate-200/50" viewBox="0 0 2 1">
          <rect width="2" height="1" fill="#FFFFFF"/>
          <rect width="2" height="0.333" fill="#00732F"/>
          <rect y="0.333" width="2" height="0.333" fill="#FFFFFF"/>
          <rect y="0.667" width="2" height="0.333" fill="#000000"/>
          <rect width="0.5" height="1" fill="#FF0000"/>
        </svg>
      )
    },
    {
      name: 'Singapore',
      hub: 'APAC Infra Hub',
      flag: (
        <svg className="w-10 h-7 rounded border border-slate-200/50" viewBox="0 0 3 2">
          <rect width="3" height="1" fill="#ED2939"/>
          <rect y="1" width="3" height="1" fill="#FFFFFF"/>
          <path d="M0.5 0.35 A 0.25 0.25 0 0 0 0.5 0.85 A 0.22 0.22 0 0 1 0.56 0.35 A 0.25 0.25 0 0 0 0.5 0.35 Z" fill="#FFFFFF"/>
          <circle cx="0.70" cy="0.45" r="0.03" fill="#FFFFFF"/>
          <circle cx="0.78" cy="0.52" r="0.03" fill="#FFFFFF"/>
          <circle cx="0.74" cy="0.62" r="0.03" fill="#FFFFFF"/>
          <circle cx="0.64" cy="0.62" r="0.03" fill="#FFFFFF"/>
          <circle cx="0.60" cy="0.52" r="0.03" fill="#FFFFFF"/>
        </svg>
      )
    }
  ];

  return (
    <section id="global-reach" className="py-16 bg-white overflow-hidden">
      {/* Headings */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-2">
        <ScrollReveal>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-brand-primary border border-blue-100 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Global Reach & Scalability
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
            Global Scale, Local Precision
          </h2>
        </ScrollReveal>
      </div>

      {/* Centered Map (Spans wider) */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 -mt-8 md:-mt-16">
        <ScrollReveal>
          <div className="relative flex items-center justify-center overflow-visible">
            <img
              src="/images/world_map_highlighted.png"
              alt="World map highlighting India, United States, United Arab Emirates, United Kingdom, and Singapore"
              className="w-full h-auto max-h-[850px] object-contain select-none hover:scale-[1.02] transition-transform duration-700 ease-out"
              draggable="false"
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Countries list */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-24">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal delay={100}>
            <div 
              className="flex flex-row flex-nowrap md:justify-center gap-4 overflow-x-auto pb-4 scrollbar-none"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {countries.map((country, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100 px-6 py-4 flex items-center gap-4 hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 group flex-shrink-0"
                >
                  <div className="w-14 h-9.5 flex items-center justify-center rounded overflow-hidden bg-slate-50 border border-slate-100 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                    {country.flag}
                  </div>
                  <div className="text-left">
                    <h4 className="text-slate-800 font-extrabold text-sm leading-none">{country.name}</h4>
                    <p className="text-slate-400 text-[10px] font-bold tracking-wider uppercase mt-1">{country.hub}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ─── Main Services Provided ───
function MainServices() {
  const serviceShowcase = [
    {
      num: '01',
      title: 'BUSINESS CONSULTING',
      image: '/images/client_presentation.png',
      badge: 'Consult & Strategise',
      span: 'lg:col-span-7 md:col-span-2',
      height: 'h-[440px]',
      tags: ['Workflow Mapping', 'Friction Audits', 'Modernization Plans']
    },
    {
      num: '02',
      title: 'BRANDING',
      image: '/images/executive_leader.png',
      badge: 'Brand Authority',
      span: 'lg:col-span-5 md:col-span-1',
      height: 'h-[440px]',
      tags: ['Corporate Identity', 'Market Positioning', 'Authority Building']
    },
    {
      num: '03',
      title: 'UI/UX DESIGN',
      image: '/images/team_collaboration.png',
      badge: 'Design Excellence',
      span: 'lg:col-span-5 md:col-span-1',
      height: 'h-[440px]',
      tags: ['Clean Interfaces', 'Interactive Prototypes', 'Mobile-First Layouts']
    },
    {
      num: '04',
      title: 'SOFTWARE DEVELOPMENT',
      image: '/images/customer_software.png',
      badge: 'Custom Engineering',
      span: 'lg:col-span-7 md:col-span-2',
      height: 'h-[440px]',
      tags: ['Custom Portals', 'API Integrations', 'Secure Cloud Hosting']
    },
    {
      num: '05',
      title: 'DIGITAL MARKETING',
      image: '/images/digital_marketing_landscape.png',
      badge: 'Acquisition & Scale',
      span: 'lg:col-span-12 md:col-span-2',
      height: 'h-[380px]',
      position: 'object-bottom',
      tags: ['WhatsApp Lead Ads', 'Social Funnels', 'Targeted Ad Campaigns']
    }
  ];

  return (
    <section id="main-services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headings */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-brand-primary border border-blue-100 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Consultation <span className="gradient-text-brand">Streams</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Premium Zigzag Bento Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {serviceShowcase.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} className={`${item.span}`}>
              <div className={`relative ${item.height} rounded-[36px] overflow-hidden group border border-navy-100 bg-navy-50 hover:border-brand-accent/30 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)]`}>
                
                {/* Background Image of happy Indian users/clients */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover ${item.position || 'object-center'} transition-all duration-700 ease-out group-hover:scale-[1.025] brightness-[0.7] group-hover:brightness-[0.8]`}
                />
                
                {/* Rich Gradient Overlay for high text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Top Badge: Number and badge label */}
                <div className="absolute top-5 left-5 right-5 sm:top-8 sm:left-8 sm:right-8 flex items-center justify-between z-20">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase bg-white/95 text-brand-primary border border-slate-100">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand-accent animate-pulse" />
                    {item.badge}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-white/50 tracking-wider">
                    {item.num}
                  </span>
                </div>

                {/* Bottom content with Title, Bullet Tags & Button */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 md:p-10 flex flex-col justify-end text-left z-10">
                  <h3 className="text-[20px] sm:text-3xl font-black text-white leading-[1.1] sm:leading-none tracking-tight mb-3 sm:mb-5 group-hover:text-brand-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Bullet Tags (No paragraphs) */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="inline-flex items-center px-2.5 py-1 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Case Studies Button */}
                  <Link
                    to="/case-studies"
                    className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-extrabold uppercase tracking-wider bg-white/95 text-brand-primary border border-white/20 hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-300 w-fit group/btn"
                  >
                    Case Studies
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How Industries Benefit (Sectors Served) ───
function IndustriesBenefit() {
  const sectorsServed = [
    {
      title: 'Clinics & Healthcare',
      icon: 'healthcare',
      image: '/images/executive_leader.png',
      category: 'Services & Finance',
      metrics: {
        campaigns: '14+',
        websites: '8+',
        apps: '6+',
        crms: '3+',
        growth: '+85%'
      }
    },
    {
      title: 'Retail Stores & Shops',
      icon: 'retail',
      image: '/images/customer_software.png',
      category: 'Retail & Commerce',
      metrics: {
        campaigns: '32+',
        websites: '15+',
        apps: '12+',
        crms: '4+',
        growth: '+45%'
      }
    },
    {
      title: 'Transports & Cargo',
      icon: 'logistics',
      image: '/images/tech_infrastructure.png',
      category: 'Logistics & Manufacturing',
      metrics: {
        campaigns: '8+',
        websites: '4+',
        apps: '5+',
        crms: '3+',
        growth: '+60%'
      }
    },
    {
      title: 'E-Commerce Brands',
      icon: 'ecommerce',
      image: '/images/customer_marketing.png',
      category: 'Retail & Commerce',
      metrics: {
        campaigns: '45+',
        websites: '6+',
        apps: '3+',
        crms: '5+',
        growth: '+120%'
      }
    },
    {
      title: 'Factories & Mfg',
      icon: 'manufacturing',
      image: '/images/factory_platform.png',
      category: 'Logistics & Manufacturing',
      metrics: {
        campaigns: '12+',
        websites: '3+',
        apps: '8+',
        crms: '4+',
        growth: '-30%'
      }
    },
    {
      title: 'Finance & Banking',
      icon: 'finance',
      image: '/images/strategy_session.png',
      category: 'Services & Finance',
      metrics: {
        campaigns: '15+',
        websites: '5+',
        apps: '4+',
        crms: '2+',
        growth: '+50%'
      }
    },
    {
      title: 'Schools & Colleges',
      icon: 'education',
      image: '/images/institute_success.png',
      category: 'Services & Finance',
      metrics: {
        campaigns: '9+',
        websites: '4+',
        apps: '6+',
        crms: '3+',
        growth: '99%'
      }
    },
    {
      title: 'Real Estate & Property',
      icon: 'real-estate',
      image: '/images/design_workstation.png',
      category: 'Retail & Commerce',
      metrics: {
        campaigns: '18+',
        websites: '10+',
        apps: '5+',
        crms: '4+',
        growth: '+40%'
      }
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(8);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex(prev => prev - 1);
  };

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex(prev => prev + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= 16) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - 8);
    } else if (currentIndex < 8) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + 8);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitioning]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const extendedSectors = [...sectorsServed, ...sectorsServed, ...sectorsServed];
  const realIndex = currentIndex % 8;

  return (
    <section id="sectors-served" className="pt-24 pb-12 bg-slate-50/50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-50 text-brand-primary border border-blue-100 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
              Sectors Served
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-none">
              Industry Domains We Serve
            </h2>
          </ScrollReveal>
        </div>

        {/* Extraordinary Carousel Container */}
        <div className="relative px-0 sm:px-14 lg:px-20 select-none max-w-6xl mx-auto">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Industry"
            className="hidden sm:flex absolute left-0 sm:left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 hover:border-brand-primary text-slate-700 hover:text-brand-primary rounded-full items-center justify-center transition-all duration-300 cursor-pointer shadow-none"
          >
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slider Viewport */}
          <div 
            className="overflow-hidden w-full rounded-[36px] cursor-grab active:cursor-grabbing border border-navy-100/60 bg-white"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex w-full select-none h-full"
              style={{
                transform: `translate3d(-${currentIndex * (100 / 24)}%, 0, 0)`,
                transition: isTransitioning ? 'transform 600ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
                width: `2400%`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedSectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 box-border p-5 sm:p-8 lg:p-10"
                  style={{ width: `${100 / 24}%` }}
                >
                  <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-12 items-stretch h-full">
                    
                    {/* Sector Cover Image (Mock inset frame) */}
                    <div className="w-full lg:w-1/2 flex-shrink-0 flex items-center justify-center p-2.5 bg-slate-50 border border-slate-100/80 rounded-[32px]">
                      <div className="w-full h-44 sm:h-80 lg:h-full rounded-[24px] overflow-hidden relative">
                        <img 
                          src={sector.image} 
                          alt={sector.title} 
                          className="w-full h-full object-cover brightness-100 hover:scale-[1.02] transition-transform duration-700 ease-out"
                          draggable="false"
                        />
                      </div>
                    </div>

                    {/* Sector Details */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      
                      {/* Meta Header */}
                      <div className="flex items-center justify-between mb-3 sm:mb-5">
                        <span className="text-[9px] sm:text-[11px] font-bold text-brand-accent uppercase tracking-widest bg-brand-accent/10 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-brand-accent/15">
                          {sector.category}
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400">
                          {String((idx % 8) + 1).padStart(2, '0')} / 08
                        </span>
                      </div>

                      {/* Header: Title & Icon */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-8">
                        <div className="flex items-center justify-center text-brand-primary flex-shrink-0">
                          <Icon name={sector.icon} className="w-7 h-7 sm:w-10 sm:h-10" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[22px] sm:text-3xl lg:text-4xl font-extrabold text-brand-primary tracking-tight leading-[1.1] sm:leading-tight">{sector.title}</h3>
                      </div>

                      {/* Metrics 2x2 Grid */}
                      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-5 sm:mb-8 flex-grow">
                        {/* Marketing */}
                        <div className="bg-white border border-slate-100 rounded-[16px] sm:rounded-[20px] p-3 sm:p-5 flex items-center gap-2.5 sm:gap-4 hover:border-brand-primary/30 hover:shadow-md transition-all duration-300">
                          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] sm:text-sm font-bold text-slate-500 mb-0 sm:mb-0.5">Marketing</span>
                            <span className="text-[18px] sm:text-3xl font-extrabold text-brand-accent tracking-tight leading-none">{sector.metrics.campaigns}</span>
                          </div>
                        </div>

                        {/* Websites */}
                        <div className="bg-white border border-slate-100 rounded-[16px] sm:rounded-[20px] p-3 sm:p-5 flex items-center gap-2.5 sm:gap-4 hover:border-brand-primary/30 hover:shadow-md transition-all duration-300">
                          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] sm:text-sm font-bold text-slate-500 mb-0 sm:mb-0.5">Websites</span>
                            <span className="text-[18px] sm:text-3xl font-extrabold text-brand-accent tracking-tight leading-none">{sector.metrics.websites}</span>
                          </div>
                        </div>

                        {/* Apps */}
                        <div className="bg-white border border-slate-100 rounded-[16px] sm:rounded-[20px] p-3 sm:p-5 flex items-center gap-2.5 sm:gap-4 hover:border-brand-primary/30 hover:shadow-md transition-all duration-300">
                          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] sm:text-sm font-bold text-slate-500 mb-0 sm:mb-0.5">Apps</span>
                            <span className="text-[18px] sm:text-3xl font-extrabold text-brand-accent tracking-tight leading-none">{sector.metrics.apps}</span>
                          </div>
                        </div>

                        {/* CRMs */}
                        <div className="bg-white border border-slate-100 rounded-[16px] sm:rounded-[20px] p-3 sm:p-5 flex items-center gap-2.5 sm:gap-4 hover:border-brand-primary/30 hover:shadow-md transition-all duration-300">
                          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] sm:text-sm font-bold text-slate-500 mb-0 sm:mb-0.5">CRMs</span>
                            <span className="text-[18px] sm:text-3xl font-extrabold text-brand-accent tracking-tight leading-none">{sector.metrics.crms}</span>
                          </div>
                        </div>
                      </div>

                      {/* Growth Footer */}
                      <div className="pt-4 sm:pt-6 border-t border-slate-100 flex items-center justify-between bg-white rounded-b-3xl">
                        <span className="text-[11px] sm:text-sm font-bold text-slate-400">Verified Growth</span>
                        <div className="flex items-center gap-1.5 sm:gap-2.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20 shadow-sm">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <span className="text-[14px] sm:text-lg font-extrabold tracking-tight">{sector.metrics.growth}</span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Industry"
            className="hidden sm:flex absolute right-0 sm:right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border border-slate-200 hover:border-brand-primary text-slate-700 hover:text-brand-primary rounded-full items-center justify-center transition-all duration-300 cursor-pointer shadow-none"
          >
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Page Indicators */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {sectorsServed.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (!isTransitioning) return;
                  setCurrentIndex(8 + idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  realIndex === idx 
                    ? 'w-6 h-2 bg-brand-primary' 
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400 cursor-pointer'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* View all button link */}
        <div className="text-center mt-12">
          <ScrollReveal delay={100}>
            <Link
              to="/industries"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-slate-700 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 hover:text-brand-primary transition-all duration-300"
            >
              Explore Full Sector Details
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

// ─── Customer Reviews / Testimonials ───
function CustomerReviews() {
  const reviews = [
    {
      quote: "Our billing queues disappeared within 3 days. Serving customers is now fast, and we collect cash register reports automatically.",
      author: "Rajesh Kumar",
      title: "Retail Store Owner",
      image: "/images/rajesh_kumar.png",
    },
    {
      quote: "The WhatsApp booking bot handles 80% of our daily appointments while we sleep. The support team handles updates immediately.",
      author: "Dr. Anjali Mehta",
      title: "Healthcare Specialist",
      image: "/images/anjali_mehta.png",
    },
    {
      quote: "Our dispatchers no longer receive constant calls. The live tracking links saved our logistics flow and pleased our global buyers.",
      author: "Vikram Singh",
      title: "Logistics Director",
      image: "/images/vikram_singh.png",
    },
  ];

  return (
    <section id="testimonials" className="pt-8 pb-28 bg-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-blue-400/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-brand-accent border border-brand-accent/20 mb-5">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5 tracking-tight">
            Trusted by Business Owners
          </h2>

        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <ScrollReveal key={idx} delay={idx * 120}>
              <div className="relative rounded-[24px] overflow-hidden h-[480px] group cursor-default">
                {/* Full-bleed person image */}
                <img 
                  src={rev.image} 
                  alt={rev.author} 
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                />

                {/* Subtle gradient only at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/50 via-40% to-transparent" />

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    "{rev.quote}"
                  </p>
                  <h4 className="text-white font-bold text-lg">{rev.author}</h4>
                  <p className="text-blue-200 text-xs font-semibold tracking-wide uppercase mt-1">{rev.title}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section (Navy Contrast Block) ───
function CTASection() {
  return (
    <section id="cta-section" className="pt-16 pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-[28px] sm:rounded-[40px] mx-0 sm:mx-8 lg:mx-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] mt-8 md:mt-12">
            {/* Background Layer with Overflow Hidden for the gradient */}
            <div className="absolute inset-0 rounded-[28px] sm:rounded-[40px] bg-gradient-to-br from-brand-primary to-[#051130] overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative flex flex-col md:flex-row items-center justify-between px-5 py-8 sm:px-10 md:px-12 lg:px-16 lg:py-12 gap-6 sm:gap-8">
              
              {/* Breaking Out Cutout Image (Hidden on mobile, Desktop right) */}
              <div className="w-full md:w-5/12 hidden md:flex justify-center md:justify-end z-20 order-1 md:order-2 md:absolute md:bottom-0 md:-right-4 lg:right-4 xl:right-12 pointer-events-none">
                <div className="w-64 sm:w-96 md:w-[450px] lg:w-[550px] xl:w-[600px] h-auto -mt-32 sm:-mt-48 md:mt-0 relative flex items-end">
                  <img
                    src="/images/business_professional_cutout.png"
                    alt="Business Automation Expert"
                    className="w-full h-auto object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-auto scale-110 sm:scale-[1.25] md:scale-[1.35] lg:scale-[1.45] origin-bottom transition-transform duration-500 md:hover:scale-[1.38] lg:hover:scale-[1.48]"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-7/12 text-center md:text-left z-10 order-2 md:order-1 pt-0 pb-0">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4 sm:mb-6">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-bold text-white tracking-widest uppercase">Free Consultation</span>
                </div>
                
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-3 sm:mb-5 tracking-tight">
                  Ready to Automate <br className="hidden lg:block"/> Your Business?
                </h2>
                <p className="text-blue-100/90 text-[13px] sm:text-xl max-w-xl mb-6 sm:mb-8 leading-relaxed font-medium mx-auto md:mx-0">
                  Book a free call with our delivery leads to map your workflows and increase your daily profit margins.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4.5 bg-white text-brand-primary font-bold sm:font-extrabold text-sm sm:text-lg rounded-xl sm:rounded-2xl
                      hover:bg-brand-accent hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] group"
                  >
                    Book Your Call
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── Page Component ───
export default function Home() {
  return (
    <main>
      <Hero />
      <GlobalReach />
      <MainServices />
      <IndustriesBenefit />

      <CustomerReviews />
      <CTASection />
    </main>
  );
}
