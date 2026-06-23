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

      {/* JSON-LD Structured Data for Google Rich Snippets */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
