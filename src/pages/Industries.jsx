import SEO from '../components/common/SEO';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';
import Icon from '../components/common/Icon';
import { industries } from '../data/content';

export default function Industries() {
  return (
    <main className="bg-slate-50">
      <SEO title="Industries" description="We serve multiple domains including Healthcare, Retail, Manufacturing, Finance, Education, and Real Estate with tailored technology solutions." url="/industries" />
      {/* Premium Dark Hero Section */}
      <section className="relative h-[500px] lg:h-[700px] flex flex-col justify-center pt-16 overflow-hidden bg-brand-primary">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img 
            src="/images/industries_hero.png" 
            alt="Multi-Industry Landscape" 
            className="w-full h-full object-cover opacity-50 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-primary/80 to-brand-primary" />
        </div>
        
        {/* Glowing Blurs */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-blue-100 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Industries
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Transforming Industries Through <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                  Digital Innovation.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-blue-100/90 text-lg sm:text-xl font-medium leading-relaxed">
                Proven vertical delivery. We address the compliance rules, transaction scale, and operating parameters of specific sectors.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.id} delay={i * 50}>
                <div
                  id={`industry-${industry.id}`}
                  className="bg-white rounded-[32px] p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group h-full flex flex-col relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center shadow-inner group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                        <Icon name={industry.icon} className="w-8 h-8" />
                      </div>
                      <span className="text-xs text-slate-300 font-black tracking-widest uppercase mt-2">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-8">
                      {industry.approach}
                    </p>

                    {/* Challenges vs Opportunities */}
                    <div className="mt-auto grid sm:grid-cols-2 gap-6 border-t border-slate-100 pt-8">
                      {/* Challenges */}
                      <div>
                        <h4 className="text-xs font-black text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                          Key Bottlenecks
                        </h4>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-red-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                              <span className="text-slate-600 text-xs font-bold leading-relaxed">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Opportunities */}
                      <div>
                        <h4 className="text-xs font-black text-brand-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-brand-accent" />
                          Digital Capabilities
                        </h4>
                        <ul className="space-y-3">
                          {industry.opportunities.map((opportunity, j) => (
                            <li key={j} className="flex items-start gap-3">
                              <svg className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-slate-700 text-xs font-bold leading-relaxed">{opportunity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
                  Need Domain-Specific Execution?
                </h2>
                <p className="text-blue-100 text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                  Our frameworks adapt to your specific operating constraints. Connect with us to outline your operational parameters.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-primary text-lg font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                >
                  Discuss Your Industry Operations
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
