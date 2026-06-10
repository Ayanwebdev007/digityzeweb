import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';
import Icon from '../components/common/Icon';

const platforms = [
  {
    title: 'Operations Platform',
    desc: 'End-to-end workflow management and process orchestration for modern enterprises.',
    icon: 'bolt',
    features: ['Workflow automation', 'Task management', 'Process analytics', 'Team collaboration'],
    status: 'In Development',
  },
  {
    title: 'Business Intelligence Suite',
    desc: 'Advanced analytics and data visualization platform for data-driven decision-making.',
    icon: 'analytics',
    features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting', 'Data integration'],
    status: 'In Development',
  },
  {
    title: 'Integration Hub',
    desc: 'Unified API management and system connectivity platform for enterprise ecosystems.',
    icon: 'integration',
    features: ['API management', 'Data synchronization', 'System connectors', 'Event streaming'],
    status: 'Planned',
  },
  {
    title: 'Automation Engine',
    desc: 'AI-powered process automation platform for intelligent business operations.',
    icon: 'automation',
    features: ['RPA workflows', 'ML-driven decisions', 'Document processing', 'Smart routing'],
    status: 'Planned',
  },
];

export default function Platforms() {
  return (
    <main className="bg-slate-50">
      {/* Premium Dark Hero Section */}
      <section className="relative h-[500px] lg:h-[700px] flex flex-col justify-center pt-16 overflow-hidden bg-brand-primary">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img 
            src="/images/platforms_hero.png" 
            alt="Digital Ecosystem Platforms" 
            className="w-full h-full object-cover opacity-50 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-primary/80 to-brand-primary" />
        </div>
        
        {/* Glowing Blurs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-accent/30 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-blue-100 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Expanding Ecosystem
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Technology Platforms for the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                  Future Enterprise.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-blue-100/90 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                An ecosystem of SaaS platforms built to solve operational constraints, designed for enterprise scale and timezone reliability.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Platform Cards */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Platforms Under Development
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                Our product teams build solutions based on patterns and pain points identified through our consulting engagements.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {platforms.map((platform, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-[32px] p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group h-full relative overflow-hidden flex flex-col">
                  {/* Decorative Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center shadow-inner group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                        <Icon name={platform.icon} className="w-8 h-8" />
                      </div>
                      <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${
                        platform.status === 'In Development'
                          ? 'bg-blue-50 text-brand-primary border border-blue-100'
                          : 'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}>
                        {platform.status}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
                      {platform.title}
                    </h3>
                    <p className="text-slate-600 text-base font-medium leading-relaxed mb-8">
                      {platform.desc}
                    </p>

                    <div className="mt-auto space-y-4 border-t border-slate-100 pt-8">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Core Modules</h4>
                      {platform.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-brand-primary" />
                          <span className="text-slate-700 text-sm font-bold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Labs - Dark Edition */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-blue-200 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Innovation Labs
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Building What's Next
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-slate-300 text-lg lg:text-xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                Our labs continuously explore AI automation and cloud systems integration to address evolving enterprise operations.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-brand-primary text-white text-lg font-bold rounded-2xl hover:bg-brand-accent transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/20 hover:-translate-y-1 group"
              >
                Discuss Platform Solutions
                <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
