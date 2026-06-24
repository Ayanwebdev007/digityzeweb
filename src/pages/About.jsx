import SEO from '../components/common/SEO';
import OptimizedImage from '../components/common/OptimizedImage';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';
import SectionHeader from '../components/common/SectionHeader';
import Icon from '../components/common/Icon';

export default function About() {
  return (
    <main className="bg-white">
      <SEO title="About" description="Learn about Digityze International, our commitments, global reach, and operating rules focused entirely on your business results and profit margins." url="/about" />
      {/* Premium Dark Hero Section */}
      <section className="relative min-h-screen sm:min-h-0 sm:h-[500px] lg:h-[700px] flex flex-col justify-center pt-28 pb-16 sm:py-16 overflow-hidden bg-brand-primary">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <OptimizedImage 
            src="/images/corporate_office_hero.png" 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-50 object-center"
            width={1024}
            height={1024}
            loading="eager"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-primary/80 to-brand-primary" />
        </div>
        
        {/* Glowing Blurs */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: text */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-white/10 text-blue-100 border border-white/10 mb-4 sm:mb-6 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  Why Us
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-[32px] sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-4 sm:mb-6 tracking-tight">
                  Simple Systems.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                    Validated Growth.
                  </span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-blue-100/90 text-[15px] sm:text-xl font-medium leading-relaxed max-w-2xl">
                  We build easy-to-use software portals, automate daily reporting, and handle all hosting and support. We focus entirely on your business results and profit margins.
                </p>
              </ScrollReveal>
            </div>

            {/* Right side: Floating Stats Grid */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <ScrollReveal delay={300}>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { stat: '98%', label: 'Daily Task Automation Rate' },
                    { stat: '10+ Hrs', label: 'Saved Weekly Per Manager' },
                    { stat: 'Zero', label: 'Paperwork Errors & Lost Records' },
                    { stat: '24/7', label: 'Dedicated System Support' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 hover:bg-white/10 transition-colors duration-300 group">
                      <div className="text-2xl sm:text-4xl font-black text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">
                        {item.stat}
                      </div>
                      <p className="text-blue-200/70 text-[9px] sm:text-xs font-bold uppercase tracking-wider leading-snug">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments to You */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Commitments"
            title="We Handle The Tech. You Handle The Business."
            description="Replace slow typing, Excel entries, and manual follow-ups with automatic systems designed for scale."
          />
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-16">
            {/* Card 1 */}
            <ScrollReveal>
              <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-8 shadow-lg shadow-brand-primary/20">
                    <Icon name="digital-transformation" className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-brand-primary transition-colors">
                    WhatsApp Bots & Smart Billing
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    We replace slow typing, Excel entries, and manual follow-ups with automatic notifications, helping you collect payments faster and prevent billing errors.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-[32px] p-8 lg:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 group relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent text-white flex items-center justify-center mb-8 shadow-lg shadow-brand-accent/20">
                    <Icon name="server" className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
                    We Handle All Setup & Hosting
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    You do not need an in-house tech team. Our specialists set up your tools, secure your cash databases, and support your staff 24/7 without you lifting a finger.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why We Exist (Overlapping Aesthetic) */}
      <section className="py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Premium Image Display */}
            <div className="relative">
              <ScrollReveal>
                <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5] shadow-2xl">
                  <OptimizedImage
                    src="/images/happy_client.png"
                    alt="Client Success"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    width={864}
                    height={1024}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
                  
                  {/* Floating Trust Card */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-[16px] sm:rounded-[24px]">
                    <div className="flex items-center gap-1 sm:gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white text-[13px] sm:text-base font-medium italic leading-relaxed">"Simple systems that actually made running our business easy. They handled everything."</p>
                  </div>
                </div>
                
                {/* Decorative Blob */}
                <div className="absolute -z-10 top-1/2 -left-12 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px]" />
              </ScrollReveal>
            </div>

            {/* Right side: Content */}
            <div className="lg:pl-8">
              <ScrollReveal>
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-brand-accent bg-brand-accent/10 mb-6 border border-brand-accent/20">
                  Value Proposition
                </span>
                <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
                  We don't deliver theoretical slide decks.
                </h2>
                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-6">
                  We construct easy-to-use software portals that handle your sales, inventory, and deliveries smoothly without requiring a PhD in computer science to operate.
                </p>
                <p className="text-slate-500 text-base leading-relaxed mb-10">
                  Every tool we build is focused entirely on saving you daily time, reducing your administrative costs, and increasing your net margins. You get working dashboards and billing reminders, not confusing theory.
                </p>
                
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-brand-primary font-bold text-lg hover:text-brand-accent transition-colors group"
                >
                  Explore Our Services
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Operating Rules */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Operating Rules"
            title="How We Guarantee Value"
            description="Our implementation process follows four simple principles focused entirely on client benefit and operational ease."
            light={true}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
            {[
              {
                title: 'No Jargon, Just Code',
                desc: 'We speak in simple terms. You get working dashboards and billing reminders, not confusing theory.',
                icon: 'target',
              },
              {
                title: 'Complete Workflow Sync',
                desc: 'We map your entire daily flow so your sales, billing, and stock levels are always connected.',
                icon: 'digital-transformation',
              },
              {
                title: 'Affordable Tools First',
                desc: 'We suggest affordable, validated tools, helping you save lakhs in unnecessary software bills.',
                icon: 'lightbulb',
              },
              {
                title: 'Constant Support Hub',
                desc: 'We stay with you. We train your staff, handle updates, and fix issues in real time.',
                icon: 'handshake',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className="h-full">
                <div className="bg-white rounded-[32px] p-8 h-full border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 group hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <Icon name={item.icon} className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Support Infrastructure (Dark Block matching homepage) */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-blue-200 border border-blue-500/30 mb-5 bg-white/5 backdrop-blur-md">
                Our Base
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                Active Local Support Hub in Bangalore, India
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="text-blue-100/90 text-lg sm:text-xl font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
                We operate from Bangalore, India, utilizing a dedicated pool of software support specialists. We keep your systems online and coordinate operations smoothly.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { label: 'Constant Maintenance', desc: 'We monitor your WhatsApp portals and dashboard hosting daily.' },
                { label: 'Bangalore Hub', desc: 'Our technical support team is located in India\'s technology capital.' },
                { label: 'Staff Training', desc: 'We train your billing clerks and store managers in simple steps.' },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={200 + i * 100}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-[24px] p-8 border border-white/10 hover:bg-white/10 transition-colors h-full">
                    <h4 className="text-white text-lg font-bold mb-3">{item.label}</h4>
                    <p className="text-blue-200/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 text-brand-primary mb-8 shadow-inner border border-blue-100">
              <Icon name="handshake" className="w-10 h-10" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Partner With Us
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's evaluate how our consulting and engineering capabilities can strengthen your operations and increase your profit margins.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white text-lg font-bold rounded-2xl hover:bg-brand-accent transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/20 hover:-translate-y-1 group"
            >
              Start a Conversation
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
