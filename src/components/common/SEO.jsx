import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  url,
  image = "https://digityzeinternational.com/images/corporate_office_hero.png",
  schema,
  article = false,
  publishedTime,
  author = "Digityze International"
}) {
  const siteTitle = "Digityze International™";
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} — Global Digital Transformation & Technology Consulting`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical Link */}
      <link rel="canonical" href={`https://digityzeinternational.com${url}`} />

      {/* Open Graph tags (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={`https://digityzeinternational.com${url}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Article specific OG tags */}
      {article && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {article && <meta property="article:author" content={author} />}

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={`https://digityzeinternational.com${url}`} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data for Google Entity Authority & Brand Recognition */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://digityzeinternational.com/#organization",
              "name": "Digityze International",
              "alternateName": ["Digityze International™", "Digityze", "Digityze International Consulting"],
              "url": "https://digityzeinternational.com",
              "logo": "https://digityzeinternational.com/digityze%20logo%2001.png",
              "description": "Global technology and business transformation company helping organizations modernize, scale, and digitize operations worldwide.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "IN"
              }
            },
            {
              "@type": "WebSite",
              "@id": "https://digityzeinternational.com/#website",
              "url": "https://digityzeinternational.com",
              "name": "Digityze International™",
              "publisher": {
                "@id": "https://digityzeinternational.com/#organization"
              }
            }
          ]
        })}
      </script>

      {/* Page-specific custom JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
