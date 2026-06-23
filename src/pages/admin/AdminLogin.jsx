import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid credentials or access denied.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Digityze International</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-brand-primary flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-accent/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-md w-full space-y-8 bg-white/10 backdrop-blur-2xl p-10 md:p-12 rounded-[32px] border border-white/20 relative z-10">
          <div>
            <img src="/digityze logo 01.png" alt="Digityze Logo" className="mx-auto h-14 w-auto brightness-0 invert opacity-90" />
            <h2 className="mt-8 text-center text-3xl font-black text-white uppercase tracking-widest">
              Admin Portal
            </h2>
            <p className="mt-3 text-center text-sm font-bold text-blue-200 uppercase tracking-widest">
              Restricted Access
            </p>
          </div>
          
          <form className="mt-10 space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-100 text-sm font-medium p-4 rounded-xl text-center backdrop-blur-sm">
                {error}
              </div>
            )}
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2 ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:bg-white/10 transition-all duration-300"
                  placeholder="admin@digityze.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/70 mb-2 ml-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:bg-white/10 transition-all duration-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-sm font-black uppercase tracking-widest text-brand-primary bg-white hover:bg-brand-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary focus:ring-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-8"
            >
              {loading ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
