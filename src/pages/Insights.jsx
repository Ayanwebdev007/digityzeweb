import { useState } from 'react';
import SEO from '../components/common/SEO';
import ScrollReveal from '../components/common/ScrollReveal';
import { insights } from '../data/content';

const categories = ['All', 'Business', 'Technology', 'SaaS'];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredInsights = activeCategory === 'All'
    ? insights
    : insights.filter((i) => i.category === activeCategory);

  return (
    <main className="bg-slate-50">
      <SEO title="Insights" description="Read our latest tech insights, business modernization trends, and digital transformation strategies." url="/insights" />
      {/* Premium Dark Hero Section */}
      <section className="relative h-[500px] lg:h-[700px] flex flex-col justify-center pt-16 overflow-hidden bg-brand-primary">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img 
            src="/images/insights_hero.png" 
            alt="Data and Perspectives" 
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
                Knowledge Hub
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Strategic Perspectives on <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                  Digital Transformation.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-blue-100/90 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                Insights, frameworks, and operational analysis from our consulting engagements — guiding leadership teams through modern technological change.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Category Filter + Articles */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`insights-filter-${cat.toLowerCase()}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                      : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Articles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredInsights.map((insight, i) => (
              <ScrollReveal key={insight.id} delay={i * 50}>
                <article
                  id={`insight-${insight.id}`}
                  className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group h-full flex flex-col relative"
                >
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Category color bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary to-brand-accent group-hover:from-brand-accent group-hover:to-blue-400 transition-all duration-500" />
                  
                  <div className="p-8 flex flex-col flex-1 relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-blue-50 text-brand-primary">
                        {insight.category}
                      </span>
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                        {insight.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-brand-accent transition-colors leading-snug">
                      {insight.title}
                    </h3>

                    <p className="text-slate-600 text-sm font-medium leading-relaxed flex-1 mb-8">
                      {insight.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                      <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{insight.date}</span>
                      <span className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold 
                        opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                        Read
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Newsletter CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-brand-primary">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-darker" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="relative px-8 py-20 lg:px-16 lg:py-24 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  Stay Informed.
                </h2>
                <p className="text-blue-100 text-lg sm:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                  Strategic insights delivered directly to your inbox. Actionable frameworks on digital transformation and operational scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your corporate email"
                    className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white 
                      placeholder:text-blue-200 focus:outline-none focus:border-brand-accent focus:bg-white/20 focus:ring-2 focus:ring-brand-accent/50
                      transition-all duration-300 text-base font-medium backdrop-blur-md"
                  />
                  <button
                    className="px-8 py-4 bg-white text-brand-primary font-bold rounded-2xl hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-xl shadow-black/10 hover:-translate-y-1 whitespace-nowrap"
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
