import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

// Separate output preserves the existing GitHub Pages and local development setup.
const result = spawnSync(process.execPath, [
  'node_modules/vite/bin/vite.js', 'build', '--configLoader', 'runner',
  '--base', '/', '--outDir', 'hostinger/public_html', '--emptyOutDir',
], {
  stdio: 'inherit',
  env: { ...process.env, VITE_BASE_PATH: '/', VITE_HOSTINGER_BUILD: 'true' },
});
if (result.status !== 0) process.exit(result.status ?? 1);
for (const file of ['index.html', '.htaccess', 'assets/hero-client-standard.png', 'assets/hero-client-logo.png']) {
  if (!existsSync(`hostinger/public_html/${file}`)) throw new Error(`Missing deployment file: ${file}`);
}
const html = readFileSync('hostinger/public_html/index.html', 'utf8');
if (html.includes('/Aishawarya-Redevelopment-Advisory-Company/')) throw new Error('Unexpected GitHub Pages base path');
console.log('Hostinger files ready: hostinger/public_html (upload its CONTENTS to your domain public_html).');
