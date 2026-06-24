/**
 * Image Optimization Script
 * Converts PNG images to WebP format at multiple responsive sizes.
 * 
 * Usage: node scripts/optimize-images.js
 * 
 * Output: public/images/optimized/<name>-<width>w.webp
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, '..', 'public', 'images');
const OUTPUT_DIR = path.join(INPUT_DIR, 'optimized');
const SIZES = [480, 768, 1024]; // Responsive breakpoints
const WEBP_QUALITY = 80; // Good balance of quality vs size

async function optimizeImages() {
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Get all PNG files in the images directory
  const files = fs.readdirSync(INPUT_DIR).filter(f => 
    f.endsWith('.png') && !fs.statSync(path.join(INPUT_DIR, f)).isDirectory()
  );

  console.log(`\n🖼️  Found ${files.length} PNG images to optimize\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;
  let processedCount = 0;

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const baseName = path.basename(file, '.png');
    const originalSize = fs.statSync(inputPath).size;
    totalOriginal += originalSize;

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      for (const targetWidth of SIZES) {
        // Don't upscale — only downscale or keep same
        const width = Math.min(targetWidth, metadata.width);
        const outputPath = path.join(OUTPUT_DIR, `${baseName}-${targetWidth}w.webp`);

        await sharp(inputPath)
          .resize(width, null, { 
            withoutEnlargement: true,
            fit: 'inside'
          })
          .webp({ quality: WEBP_QUALITY })
          .toFile(outputPath);

        const optimizedSize = fs.statSync(outputPath).size;
        totalOptimized += optimizedSize;
      }

      processedCount++;
      const savings = ((1 - (fs.statSync(path.join(OUTPUT_DIR, `${baseName}-1024w.webp`)).size / originalSize)) * 100).toFixed(1);
      console.log(`  ✅ ${file} → ${SIZES.length} WebP sizes (${savings}% smaller at 1024w)`);
    } catch (err) {
      console.error(`  ❌ Failed: ${file} — ${err.message}`);
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Processed: ${processedCount}/${files.length} images`);
  console.log(`   Original total: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Optimized total: ${(totalOptimized / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Savings: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%\n`);
}

optimizeImages().catch(console.error);
