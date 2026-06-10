import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';
import Icon from '../components/common/Icon';

const values = [
  {
    title: 'Impact-Driven Work',
    desc: 'Every project directly impacts how businesses operate and grow. Your work creates tangible transformation.',
    icon: 'target',
  },
  {
    title: 'Continuous Learning',
    desc: 'Work across industries, technologies, and business challenges. Every engagement expands your expertise.',
    icon: 'book',
  },
  {
    title: 'Global Perspective',
    desc: 'Collaborate with organizations worldwide. Build cross-cultural understanding and global business acumen.',
    icon: 'market-expansion',
  },
  {
    title: 'Innovation Culture',
    desc: "We encourage experimentation, creative thinking, and building solutions that don't exist yet.",
    icon: 'lightbulb',
  },
];

const openings = [
  {
    title: 'Business Consultant',
    type: 'Full-time',
    location: 'India / Remote',
    dept: 'Consulting',
  },
  {
    title: 'Technology Architect',
    type: 'Full-time',
    location: 'India / Remote',
    dept: 'Technology',
  },
  {
    title: 'Full-Stack Developer',
    type: 'Full-time',
    location: 'India / Remote',
    dept: 'Engineering',
  },
  {
    title: 'Digital Strategy Analyst',
    type: 'Full-time',
    location: 'India / Remote',
    dept: 'Strategy',
  },
  {
    title: 'Product Manager',
    type: 'Full-time',
    location: 'India / Remote',
    dept: 'Product',
  },
];

export default function Careers() {
  return (
    <main className="bg-slate-50">
      {/* Premium Dark Hero Section */}
      <section className="relative h-[500px] lg:h-[700px] flex flex-col justify-center pt-16 overflow-hidden bg-brand-primary">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img 
            src="/images/careers_hero.png" 
            alt="Careers at Digityze" 
            className="w-full h-full object-cover opacity-50 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-primary/80 to-brand-primary" />
        </div>
        
        {/* Glowing Blurs */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-blue-100 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Careers
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Join Us in Building the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                  Future of Business.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-blue-100/90 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                We're building a team of strategic thinkers, technologists, and operational advisors who are passionate about transforming legacy business structures worldwide.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-slate-50 relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                Why Build With Us
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                At Digityze International, you don't just execute projects — you shape the operating systems of global businesses.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group h-full flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="w-14 h-14 rounded-2xl bg-blue-50 text-brand-primary flex items-center justify-center mb-6 shadow-inner group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      <Icon name={value.icon} className="w-6 h-6" />
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-brand-accent transition-colors leading-snug">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-medium leading-relaxed flex-1">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions - Dark Premium Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Current Opportunities
              </h2>
              <p className="text-slate-300 text-lg font-medium leading-relaxed">
                We're always looking for exceptional consultants and developers. Reach out to start a conversation.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl space-y-4">
            {openings.map((role, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 group flex items-center justify-between flex-wrap gap-6 cursor-pointer">
                  <div>
                    <h3 className="text-white text-xl font-black group-hover:text-brand-accent transition-colors mb-2 tracking-wide">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-brand-primary/50 text-blue-100 border border-brand-primary/50">
                        {role.dept}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <span className="text-slate-300 text-sm font-bold uppercase tracking-wider">{role.type}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <span className="text-slate-300 text-sm font-bold uppercase tracking-wider">{role.location}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-primary text-white text-sm font-bold rounded-xl hover:bg-brand-accent transition-all duration-300 group/btn"
                  >
                    Apply Now
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
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
                  Don't See Your Role?
                </h2>
                <p className="text-blue-100 text-lg sm:text-xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                  We're expanding our core consulting and technical delivery teams. Send us your resume and let's explore opportunities.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white text-brand-primary text-lg font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                >
                  Connect With Us
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
