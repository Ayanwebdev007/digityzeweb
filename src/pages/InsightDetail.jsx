import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '../config/firebase';
import SEO from '../components/common/SEO';
import ScrollReveal from '../components/common/ScrollReveal';
import 'react-quill-new/dist/quill.snow.css';

export default function InsightDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const q = query(collection(db, 'insights'), where('slug', '==', slug), limit(1));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          setPost({ id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() });
        } else {
          // Fallback check by document ID in case slug wasn't used
          const idQuery = query(collection(db, 'insights'), where('__name__', '==', slug), limit(1));
          const idSnapshot = await getDocs(idQuery);
          if (!idSnapshot.empty) {
             setPost({ id: idSnapshot.docs[0].id, ...idSnapshot.docs[0].data() });
          } else {
             navigate('/insights');
          }
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
      </div>
    );
  }

  if (!post) return null;

  const publishedDate = post.createdAt ? post.createdAt.toDate().toISOString() : new Date().toISOString();
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.image || "https://digityzeinternational.com/images/corporate_office_hero.png"],
    "datePublished": publishedDate,
    "dateModified": post.updatedAt ? post.updatedAt.toDate().toISOString() : publishedDate,
    "author": [{
      "@type": "Organization",
      "name": "Digityze International",
      "url": "https://digityzeinternational.com"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Digityze International",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digityzeinternational.com/digityze%20logo%20white.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <main className="bg-slate-50 pb-24">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        url={`/insights/${slug || post.id}`}
        image={post.image}
        article={true}
        publishedTime={publishedDate}
        schema={articleSchema}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-primary overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-primary/80 to-brand-primary" />
         <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-white/10 text-brand-accent backdrop-blur-md">
                  {post.category}
                </span>
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
                  {post.readTime || '5 MIN READ'}
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                {post.title}
              </h1>
            </ScrollReveal>
            {post.createdAt && (
              <ScrollReveal delay={200}>
                <p className="text-blue-100/70 font-medium tracking-wide text-sm">
                  Published on {post.createdAt.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </ScrollReveal>
            )}
         </div>
      </section>

      {/* Content Section */}
      <section className="relative -mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={300}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-200">
            {post.image && (
              <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200">
                <img src={post.image} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
              </div>
            )}
            
            <div className="ql-snow">
              <div 
                className="ql-editor !p-0 !text-slate-700 text-lg leading-relaxed font-medium"
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
            </div>
            
            <div className="mt-16 pt-8 border-t border-slate-200 text-center">
              <Link to="/insights" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold uppercase tracking-wider text-sm transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all Insights
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
