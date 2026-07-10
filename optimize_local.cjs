const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'src/assets/images';
const destDir = 'src/assets/images/optimized';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = [
  { src: 'OfficeOverseeMine.png', dest: 'OfficeOverseeMine.webp' },
  { src: 'operations-improvement-team-reviewing-space.png', dest: 'operations-improvement-team-reviewing-space.webp' },
  { src: 'operations-improvement-team-reviewing-space9by16.png', dest: 'operations-improvement-team-reviewing-space9by16.webp' },
  { src: 'operations-improvement-team-reviewing.png', dest: 'operations-improvement-team-reviewing.webp' },
  { src: 'graduate-exposure-learning-environment.png', dest: 'graduate-exposure-learning-environment.webp' },
  { src: 'operational-excellence-in-action.png', dest: 'operational-excellence-in-action.webp' }
];

async function run() {
  for (const item of mapping) {
    const srcPath = path.join(srcDir, item.src);
    const destPath = path.join(destDir, item.dest);
    
    if (fs.existsSync(srcPath)) {
      try {
        await sharp(srcPath).webp({ quality: 80 }).toFile(destPath);
        console.log(`Optimized ${item.src} -> ${item.dest}`);
      } catch (e) {
        console.error(`Error optimizing ${item.src}:`, e);
      }
    } else {
      console.log(`Source not found: ${srcPath}`);
    }
  }
}

run();
