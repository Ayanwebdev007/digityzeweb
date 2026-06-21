import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';
import Icon from '../components/common/Icon';
import { services } from '../data/content';

export default function Services() {
  return (
    <main className="bg-slate-50">
      <SEO title="Services" description="Explore our specialized consulting, custom software development, digital marketing, UI/UX design, and branding services." url="/services" />
      {/* Premium Dark Hero Section */}
      <section className="relative h-[500px] lg:h-[700px] flex flex-col justify-center pt-16 overflow-hidden bg-brand-primary">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img 
            src="/images/services_hero.png" 
            alt="Futuristic Data Center" 
            className="w-full h-full object-cover opacity-50 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-primary/80 to-brand-primary" />
        </div>
        
        {/* Glowing Blurs */}
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-blue-100 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Our Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Operating Systems <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                  for Scale.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-blue-100/90 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                We deploy consulting and software capabilities to modernize legacy operations, automate compliance, and run scalable digital environments.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid (Staggered Dark & Light Cards) */}
      <section className="py-24 relative -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, i) => (
              <ScrollReveal key={service.id}>
                <div
                  id={`service-${service.id}`}
                  className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white text-brand-primary flex items-center justify-center shadow-xl shadow-brand-primary/10 border border-slate-100">
                        <Icon name={service.icon} className="w-8 h-8" />
                      </div>
                      <span className="text-sm font-black tracking-widest uppercase text-slate-400">
                        0{i + 1} / 0{services.length}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
                      {service.fullDesc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                      {/* Problem */}
                      <div className="bg-white p-6 rounded-[24px] border border-red-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-red-400" />
                        <h4 className="text-xs font-black text-red-500 uppercase tracking-widest mb-3">The Bottleneck</h4>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">{service.problem}</p>
                      </div>

                      {/* Solution */}
                      <div className="bg-white p-6 rounded-[24px] border border-blue-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-accent" />
                        <h4 className="text-xs font-black text-brand-accent uppercase tracking-widest mb-3">Our Execution</h4>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">{service.solution}</p>
                      </div>
                    </div>

                    <div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-brand-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                      >
                        Discuss This Service
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Methodology/Outcomes Column */}
                  <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                    <div className="bg-brand-primary rounded-[32px] p-8 lg:p-10 border border-brand-darker shadow-2xl shadow-brand-primary/20 h-full relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none" />
                      
                      <div className="relative z-10">
                        {/* Methodology */}
                        <div className="mb-10">
                          <h4 className="text-xs font-black text-blue-200 uppercase tracking-widest mb-6">Execution Steps</h4>
                          <div className="space-y-4">
                            {service.methodology.map((step, j) => (
                              <div key={j} className="flex items-start gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 text-white border border-white/20
                                  text-sm font-bold flex items-center justify-center shadow-inner">
                                  {j + 1}
                                </span>
                                <span className="text-white font-medium text-base leading-relaxed pt-1">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Outcomes */}
                        <div className="pt-8 border-t border-white/10">
                          <h4 className="text-xs font-black text-blue-200 uppercase tracking-widest mb-6">Projected Outcomes</h4>
                          <div className="grid grid-cols-1 gap-4">
                            {service.outcomes.map((outcome, j) => (
                              <div key={j} className="flex items-center gap-3 bg-white/5 rounded-2xl p-4 border border-white/5">
                                <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center flex-shrink-0">
                                  <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <span className="text-white text-sm font-bold">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {i < services.length - 1 && (
                  <div className="my-16 lg:my-24 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-darker" />
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative px-8 py-20 lg:px-16 lg:py-24 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 text-white mb-8 border border-white/20 backdrop-blur-md">
                  <Icon name="digital-transformation" className="w-10 h-10" />
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
                  Need a Customized Evaluation?
                </h2>
                <p className="text-blue-100 text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                  Schedule a session with our delivery leads to map your operational flow and find exact bottlenecks.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-primary text-lg font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                >
                  Book Discovery Session
                  <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
