import { useState } from 'react';

/**
 * OptimizedImage component that serves WebP with PNG fallback.
 * Uses responsive srcset for appropriate image sizes per viewport.
 * 
 * @param {string} src - Original image path (e.g., "/images/team_collaboration.png")
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - CSS classes
 * @param {number} width - Explicit width for CLS prevention
 * @param {number} height - Explicit height for CLS prevention
 * @param {string} loading - "lazy" | "eager" (default: "lazy")
 * @param {string} fetchPriority - "high" | "low" | "auto"
 * @param {string} sizes - Responsive sizes attribute (e.g., "(max-width: 768px) 100vw, 50vw")
 * @param {boolean} draggable - Whether the image is draggable
 * @param {object} rest - Any other props to pass through to the img element
 */
export default function OptimizedImage({
  src,
  alt = '',
  className = '',
  width,
  height,
  loading = 'lazy',
  fetchPriority,
  sizes = '100vw',
  draggable,
  ...rest
}) {
  const [useFallback, setUseFallback] = useState(false);

  // Only optimize images from /images/ directory that are PNGs
  const isOptimizable = src && src.startsWith('/images/') && src.endsWith('.png');

  if (!isOptimizable) {
    // For non-optimizable images (logos, etc.), render a plain img
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        draggable={draggable}
        {...rest}
      />
    );
  }

  // Build optimized WebP paths
  const baseName = src.replace('/images/', '').replace('.png', '');
  const webpSrcSet = [
    `/images/optimized/${baseName}-480w.webp 480w`,
    `/images/optimized/${baseName}-768w.webp 768w`,
    `/images/optimized/${baseName}-1024w.webp 1024w`,
  ].join(', ');

  if (useFallback) {
    // If WebP fails, fall back to original PNG
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        draggable={draggable}
        {...rest}
      />
    );
  }

  return (
    <picture>
      <source
        type="image/webp"
        srcSet={webpSrcSet}
        sizes={sizes}
      />
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={fetchPriority}
        draggable={draggable}
        onError={() => setUseFallback(true)}
        {...rest}
      />
    </picture>
  );
}
