import SEO from '../components/common/SEO';
import OptimizedImage from '../components/common/OptimizedImage';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';
import { caseStudies } from '../data/content';

export default function CaseStudies() {
  return (
    <main className="bg-slate-50">
      <SEO title="CaseStudies" description="View our customer success stories, real-world impact, and validated growth through custom SaaS platforms and automated workflows." url="/case-studies" />
      {/* Premium Dark Hero Section */}
      <section className="relative h-[500px] lg:h-[700px] flex flex-col justify-center pt-16 overflow-hidden bg-brand-primary">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <OptimizedImage 
            src="/images/casestudies_hero.png" 
            alt="Transformation Frameworks" 
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-blue-100 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Case Studies
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Transformation Frameworks <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                  in Action.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-blue-100/90 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                Strategic scenarios demonstrating how our digital transformation methodologies and technology architectures deliver measurable, scalable results.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Studies Container */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {caseStudies.map((study, i) => (
              <ScrollReveal key={study.id} delay={i * 50}>
                <div className="bg-white rounded-[40px] p-8 lg:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 overflow-hidden relative group">
                  
                  {/* Decorative Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
                    
                    {/* Left Column: Context */}
                    <div className="lg:col-span-7">
                      <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-blue-50 text-brand-primary mb-6 border border-blue-100">
                        <div className="w-2 h-2 rounded-full bg-brand-accent" />
                        {study.category}
                      </span>
                      <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight leading-tight group-hover:text-brand-accent transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-brand-primary font-bold text-sm uppercase tracking-widest mb-6">
                        {study.subtitle}
                      </p>
                      <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">
                        {study.description}
                      </p>

                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Strategic Approach</h4>
                      <div className="space-y-4 mb-8">
                        {study.approach.map((step, j) => (
                          <div key={j} className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 text-brand-primary 
                              text-sm font-bold flex items-center justify-center border border-slate-200 shadow-inner">
                              {j + 1}
                            </span>
                            <span className="text-slate-700 text-sm font-bold leading-relaxed pt-1">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column: Results & CTA */}
                    <div className="lg:col-span-5">
                      <div className="bg-slate-900 rounded-[32px] p-8 border border-slate-800 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
                        {/* Background subtle glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] pointer-events-none" />
                        
                        <div className="relative z-10">
                          <h4 className="text-xs font-black text-blue-200 uppercase tracking-widest mb-8">Projected Results</h4>
                          <div className="grid grid-cols-2 gap-4 mb-10">
                            {study.results.map((result, j) => (
                              <div key={j} className="bg-white/5 rounded-2xl p-5 border border-white/10 text-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <svg className="w-6 h-6 text-brand-accent mb-3 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <p className="text-white text-sm font-bold leading-snug">{result}</p>
                              </div>
                            ))}
                          </div>

                          <Link
                            to="/contact"
                            className="inline-flex items-center justify-center w-full px-6 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-accent transition-all duration-300 shadow-lg group"
                          >
                            Discuss a Similar Transformation
                            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
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
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-brand-primary">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-darker" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative px-8 py-20 lg:px-16 lg:py-24 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  Ready to Accelerate Performance?
                </h2>
                <p className="text-blue-100 text-lg sm:text-xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                  Every operating ecosystem has unique bottlenecks. Let's discuss how our transformation roadmaps can drive results for your business.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-primary text-lg font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                >
                  Start Your Transformation
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
