import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { ref, deleteObject } from 'firebase/storage';
import { db, auth, storage } from '../../config/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, 'insights'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postsData);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post? This will also delete its image.')) {
      try {
        // Find the post to get the image URL
        const postToDelete = posts.find(p => p.id === id);
        
        // Delete document from Firestore
        await deleteDoc(doc(db, 'insights', id));
        
        // Delete image from Storage if it exists
        if (postToDelete?.image) {
          try {
            const imageRef = ref(storage, postToDelete.image);
            await deleteObject(imageRef);
          } catch (storageError) {
            console.error("Error deleting image from storage: ", storageError);
            // Don't alert here, the post is already deleted, just log it.
          }
        }
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Failed to delete post.");
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Digityze International</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
            <div>
              <h1 className="text-3xl font-bold text-white uppercase tracking-wider">Insights Dashboard</h1>
              <p className="text-slate-400 text-sm mt-2">Manage your Digityze Insights</p>
            </div>
            <div className="flex gap-4">
              <Link 
                to="/admin/editor" 
                className="bg-brand-accent text-brand-dark px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors shadow-lg"
              >
                + New Insight
              </Link>
              <button 
                onClick={handleLogout}
                className="bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
              <svg className="mx-auto h-12 w-12 text-slate-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
              </svg>
              <h3 className="text-lg font-medium text-white mb-2">No Insights yet</h3>
              <p className="text-slate-400 mb-6">Get started by creating your first Digityze Insight.</p>
              <Link 
                to="/admin/editor" 
                className="bg-brand-accent text-brand-dark px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
              >
                Create First Insight
              </Link>
            </div>
          ) : (
            <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-black/20">
                      <th className="p-4 text-xs font-bold text-slate-300 uppercase tracking-wider">Title</th>
                      <th className="p-4 text-xs font-bold text-slate-300 uppercase tracking-wider">Category</th>
                      <th className="p-4 text-xs font-bold text-slate-300 uppercase tracking-wider">Date</th>
                      <th className="p-4 text-xs font-bold text-slate-300 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {posts.map(post => (
                      <tr key={post.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 text-sm text-white font-medium">{post.title}</td>
                        <td className="p-4 text-sm text-brand-accent">{post.category}</td>
                        <td className="p-4 text-sm text-slate-400">
                          {post.createdAt?.toDate().toLocaleDateString() || 'Draft'}
                        </td>
                        <td className="p-4 text-right">
                          <Link 
                            to={`/admin/editor/${post.id}`}
                            className="text-slate-300 hover:text-white mr-4 text-sm transition-colors"
                          >
                            Edit
                          </Link>
                          <button 
                            onClick={() => handleDelete(post.id)}
                            className="text-red-400 hover:text-red-300 text-sm transition-colors"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
