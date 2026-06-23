import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import ScrollReveal from '../components/common/ScrollReveal';

const categories = ['All', 'Technology', 'Strategy', 'Design', 'Marketing', 'Automation', 'Cloud'];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'insights'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setInsights(postsData);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

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

          {/* Articles Grid (4 columns for SEO and density) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {loading ? (
              // Loading Skeletons
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex flex-col bg-white rounded-[24px] overflow-hidden border border-slate-200 h-[400px] animate-pulse">
                  <div className="h-48 w-full bg-slate-200"></div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-5 w-20 bg-slate-200 rounded-full"></div>
                    </div>
                    <div className="h-6 bg-slate-200 rounded w-full mb-3"></div>
                    <div className="h-6 bg-slate-200 rounded w-2/3 mb-4"></div>
                    <div className="h-16 bg-slate-200 rounded mb-4"></div>
                  </div>
                </div>
              ))
            ) : filteredInsights.length === 0 ? (
               <div className="col-span-full text-center py-24 bg-white rounded-[32px] border border-slate-200">
                 <svg className="mx-auto h-12 w-12 text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
                 </svg>
                 <h3 className="text-xl font-bold text-slate-900 mb-2">No Insights Published Yet</h3>
                 <p className="text-slate-500 font-medium">Check back soon for our latest executive perspectives.</p>
               </div>
            ) : (
              filteredInsights.map((insight, i) => (
                <ScrollReveal key={insight.id} delay={i * 50}>
                  <Link
                    to={`/insights/${insight.slug || insight.id}`}
                    id={`insight-${insight.id}`}
                    className="group flex flex-col bg-white rounded-[24px] overflow-hidden border border-slate-200 hover:border-brand-accent/50 hover:-translate-y-1 transition-all duration-500 h-full"
                  >
                    {/* Top Side: Image */}
                    <div className="h-48 relative overflow-hidden bg-slate-50 border-b border-slate-100 shrink-0">
                      {insight.image ? (
                        <img 
                          src={insight.image} 
                          alt={insight.title} 
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                          <svg className="w-10 h-10 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Bottom Side: Content */}
                    <div className="p-6 flex flex-col flex-1 relative bg-white">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 relative z-10">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-50 text-brand-primary border border-blue-100">
                          {insight.category}
                        </span>
                        <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {insight.readTime || '5 MIN'}
                        </span>
                      </div>
                      
                      <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-brand-accent transition-colors relative z-10 line-clamp-2">
                        {insight.title}
                      </h2>
                      
                      <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6 line-clamp-3 relative z-10">
                        {insight.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 relative z-10">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          {insight.createdAt ? insight.createdAt.toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recent'}
                        </span>
                        <span className="flex items-center text-brand-accent font-black uppercase tracking-wider text-[10px] group-hover:translate-x-1 transition-transform duration-300">
                          Read 
                          <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">Stay Ahead of the Curve</h2>
            <p className="text-xl text-blue-100 mb-10 font-medium">Subscribe to Digityze Insights for the latest executive perspectives.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="px-6 py-4 rounded-xl bg-white text-slate-900 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-brand-accent text-brand-dark rounded-xl font-black uppercase tracking-wider hover:bg-white transition-colors duration-300 shadow-lg shadow-brand-accent/20"
              >
                Subscribe
              </button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
