import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../config/firebase';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Helmet } from 'react-helmet-async';

const CATEGORIES = ['Technology', 'Strategy', 'Design', 'Marketing', 'Automation', 'Cloud'];

export default function BlogEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [readTime, setReadTime] = useState('5 min read');
  
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    if (isEditing) {
      const fetchPost = async () => {
        try {
          const docRef = doc(db, 'insights', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setTitle(data.title);
            setSlug(data.slug || id);
            setCategory(data.category);
            setExcerpt(data.excerpt);
            setContent(data.content);
            setImageUrl(data.image);
            setReadTime(data.readTime || '5 min read');
          } else {
            alert('Insight not found!');
            navigate('/admin/dashboard');
          }
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchPost();
    }
  }, [id, navigate, isEditing]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (!isEditing) {
      setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadingImage(true);
    
    // Client-side image compression to WebP
    const compressedFile = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          // Max width/height to 1200px
          const MAX_SIZE = 1200;
          if (width > height && width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          } else if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          canvas.toBlob((blob) => {
            resolve(new File([blob], file.name.replace(/\.[^/.]+$/, "") + ".webp", { type: 'image/webp' }));
          }, 'image/webp', 0.85); // 85% quality WebP
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });

    const storageRef = ref(storage, `blog_images/${Date.now()}_${compressedFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, compressedFile);

    uploadTask.on('state_changed', 
      (snapshot) => {}, 
      (error) => {
        console.error("Error uploading image:", error);
        alert('Failed to upload image.');
        setUploadingImage(false);
      }, 
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setImageUrl(downloadURL);
        setUploadingImage(false);
      }
    );
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!title || !content || !slug) {
      alert('Title, slug, and content are required.');
      return;
    }

    setSaving(true);
    const postData = {
      title,
      slug,
      category,
      excerpt,
      content,
      image: imageUrl,
      readTime,
      updatedAt: serverTimestamp()
    };

    try {
      if (isEditing) {
        await setDoc(doc(db, 'insights', id), postData, { merge: true });
      } else {
        postData.createdAt = serverTimestamp();
        await setDoc(doc(db, 'insights', slug), postData);
      }
      navigate('/admin/dashboard');
    } catch (error) {
      console.error("Error saving Insight:", error);
      alert('Failed to save Insight.');
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-surface-dark flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent"></div>
      </div>
    );
  }

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <>
      <Helmet>
        <title>{isEditing ? 'Edit Insight' : 'New Insight'} | Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          .ql-snow .ql-picker { color: #fff; }
          .ql-snow .ql-stroke { stroke: #fff; }
          .ql-snow .ql-fill { fill: #fff; }
          .ql-toolbar.ql-snow { border-color: rgba(255,255,255,0.1); border-radius: 0.5rem 0.5rem 0 0; background: rgba(255,255,255,0.05); }
          .ql-container.ql-snow { border-color: rgba(255,255,255,0.1); border-radius: 0 0 0.5rem 0.5rem; min-height: 400px; color: #fff; font-size: 1rem; }
          .ql-editor { min-height: 400px; }
        `}</style>
      </Helmet>

      <div className="min-h-screen bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-6">
            <Link to="/admin/dashboard" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h1 className="text-3xl font-bold text-white uppercase tracking-wider">
              {isEditing ? 'Edit Insight' : 'Create New Insight'}
            </h1>
          </div>

          <form onSubmit={handleSave} className="space-y-8 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="The Future of AI in Enterprise"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">URL Slug</label>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  disabled={isEditing}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-slate-400 disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all appearance-none"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat} className="bg-brand-dark">{cat}</option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Short Excerpt</label>
                <textarea
                  required
                  rows={3}
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                  placeholder="A brief summary of the article for the Insights page card..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Cover Image</label>
                <div className="flex items-center gap-6">
                  {imageUrl && (
                    <img src={imageUrl} alt="Cover Preview" className="h-24 w-40 object-cover rounded-lg border border-white/10" />
                  )}
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploadingImage}
                      className="block w-full text-sm text-slate-400 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-bold file:uppercase file:tracking-wider file:bg-white/10 file:text-white hover:file:bg-white/20 transition-all cursor-pointer disabled:opacity-50"
                    />
                    {uploadingImage && <p className="text-brand-accent text-sm mt-2 font-medium animate-pulse">Uploading image...</p>}
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Content</label>
                <div className="bg-black/20 rounded-lg">
                  <ReactQuill 
                    theme="snow" 
                    value={content} 
                    onChange={setContent} 
                    modules={modules}
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-end gap-4">
              <Link 
                to="/admin/dashboard"
                className="px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving || uploadingImage}
                className="px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-brand-dark bg-brand-accent hover:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {saving ? 'Publishing...' : (isEditing ? 'Update Insight' : 'Publish Insight')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
