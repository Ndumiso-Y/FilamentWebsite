const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'd:/Digital Agency/Filiament/Filament Presentation/web-presentation/src/assets';
const destDir = 'src/assets/images/optimized';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const mapping = [
  { src: 'filament/page_16_img_1.png', dest: 'filament-underground-productivity-context.webp' },
  { src: 'filament/page_17_img_1.png', dest: 'filament-mining-productivity-sprint.webp' },
  { src: 'filament/page_4_img_1.png', dest: 'filament-operational-readiness.webp' },
  { src: 'filament/page_9_img_1.png', dest: 'filament-enterprise-transformation.webp' },
  { src: 'team/monique-white-background.png', dest: 'monique-phillis-executive.webp' },
  { src: 'team/dr-rudy-white-background.png', dest: 'dr-rudy-phillis.webp' },
  { src: 'team/lefu-white-background.png', dest: 'lefu-mohloki.webp' },
  { src: 'team/marc-white-background.png', dest: 'marc-corcoran.webp' },
  { src: 'team/mxolisi-white-background.png', dest: 'mxolisi-kobus.webp' },
  { src: 'team/sadha-white-background.png', dest: 'sadha-govender.webp' },
  { src: 'team/vincent-white-background.png', dest: 'vincent-seboni.webp' },
  { src: 'team/zweli-white-background.png', dest: 'zweli-ndese.webp' }
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
