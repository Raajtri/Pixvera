// Generates the placeholder raster images (social share image, apple-touch icon, screenshot slot).
// Run with: npm run assets. Replace the outputs with your real artwork whenever you like.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

mkdirSync('src/assets', { recursive: true });
mkdirSync('public', { recursive: true });

const grid = (w, h, step, color) => {
  let s = '';
  for (let x = 0; x <= w; x += step) s += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="${color}" stroke-width="1"/>`;
  for (let y = 0; y <= h; y += step) s += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="${color}" stroke-width="1"/>`;
  return s;
};

const icon = (x, y, s) => {
  const u = s / 32;
  const r = (cx, cy, fill) => `<rect x="${x + cx * u}" y="${y + cy * u}" width="${12 * u}" height="${12 * u}" rx="${3 * u}" fill="${fill}"/>`;
  return r(2, 2, '#4F46E5') + r(18, 2, '#818CF8') + r(2, 18, '#A5B4FC') + r(18, 18, '#FF7A1A');
};

// 1200x630 social share image (PLACEHOLDER: replace with your own design)
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#0B1B3A"/>
${grid(1200, 630, 40, 'rgba(255,255,255,0.06)')}
<circle cx="1050" cy="80" r="260" fill="#4F46E5" opacity="0.35"/>
<circle cx="120" cy="600" r="220" fill="#FF7A1A" opacity="0.18"/>
${icon(80, 90, 110)}
<text x="210" y="165" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="84" fill="#fff">Pixvera</text>
<text x="212" y="205" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="24" letter-spacing="5" fill="#A5B4FC">DIGITAL GROWTH STUDIO</text>
<text x="80" y="360" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="68" fill="#fff">Get Found on Google.</text>
<text x="80" y="440" font-family="Arial, Helvetica, sans-serif" font-weight="800" font-size="68" fill="#FF7A1A">Get More Enquiries.</text>
<text x="80" y="530" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#CBD5E1">Local SEO, websites and ads for Mumbai businesses</text>
</svg>`;
await sharp(Buffer.from(og)).png({ compressionLevel: 9 }).toFile('public/og-default.png');

// 180x180 apple-touch-icon
const touch = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
<rect width="180" height="180" fill="#FAFAFC"/>
${icon(30, 30, 120).replace('#A5B4FC', '#312E81')}
</svg>`;
await sharp(Buffer.from(touch)).png().toFile('public/apple-touch-icon.png');

// Screenshot placeholder slot (1200x750), used through astro:assets
const shot = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750">
<rect width="1200" height="750" fill="#EEF2FF"/>
${grid(1200, 750, 40, 'rgba(79,70,229,0.10)')}
<rect x="0" y="0" width="1200" height="64" fill="#E0E7FF"/>
<circle cx="36" cy="32" r="8" fill="#A5B4FC"/><circle cx="64" cy="32" r="8" fill="#A5B4FC"/><circle cx="92" cy="32" r="8" fill="#A5B4FC"/>
<g transform="translate(540 270) scale(5)"><rect x="2" y="2" width="12" height="12" rx="3" fill="#4F46E5"/><rect x="18" y="2" width="12" height="12" rx="3" fill="#818CF8"/><rect x="2" y="18" width="12" height="12" rx="3" fill="#A5B4FC"/><rect x="18" y="18" width="12" height="12" rx="3" fill="#FF7A1A"/></g>
<text x="600" y="520" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="700" font-size="34" fill="#4338CA">Screenshot placeholder</text>
</svg>`;
await sharp(Buffer.from(shot)).png({ compressionLevel: 9 }).toFile('src/assets/screenshot-placeholder.png');

console.log('Generated: public/og-default.png, public/apple-touch-icon.png, src/assets/screenshot-placeholder.png');
