import { createRequire } from 'module';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const PSD = require('psd');

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = resolve(__dirname, '../src/assets/Ratish-bottle.psd');
const outDir = resolve(__dirname, '../src/assets/images');
const out = resolve(outDir, 'bottle.png');

mkdirSync(outDir, { recursive: true });

PSD.open(src).then((psd) => {
  psd.image.saveAsPng(out).then(() => {
    console.log('✓ Converted to', out);
  });
}).catch((err) => {
  console.error('Failed to convert PSD:', err.message);
  process.exit(1);
});
