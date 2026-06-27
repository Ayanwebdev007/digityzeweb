import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ID = 'digityzewebsite';
const BASE_URL = 'https://digityzeinternational.com';

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/industries',
  '/platforms',
  '/insights',
  '/case-studies',
  '/careers',
  '/contact'
];

async function generateSitemap() {
  console.log('🌍 Generating dynamic sitemap for Google...');
  
  let urls = [...staticRoutes];

  try {
    // Fetch dynamic routes from Firestore via public REST API
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/insights`);
    
    if (response.ok) {
      const data = await response.json();
      if (data.documents) {
        data.documents.forEach(doc => {
          const docId = doc.name.split('/').pop();
          // Prefer slug if it exists
          const slug = doc.fields?.slug?.stringValue || docId;
          const cleanSlug = slug.replace(/^\/+/, '');
          urls.push(`/insights/${cleanSlug}`);
        });
        console.log(`✅ Fetched ${data.documents.length} dynamic insights from Firestore.`);
      }
    } else {
      console.warn('⚠️ Failed to fetch from Firestore REST API. Dynamic routes will not be included.');
    }
  } catch (err) {
    console.error('❌ Error fetching dynamic routes:', err);
  }

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>${url === '/' || url === '/insights' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '/' ? '1.0' : url.startsWith('/insights/') ? '0.8' : '0.9'}</priority>
  </url>`).join('\n')}
</urlset>
`;

  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
  console.log(`🚀 Sitemap generated successfully with ${urls.length} total routes at public/sitemap.xml`);
}

generateSitemap();
