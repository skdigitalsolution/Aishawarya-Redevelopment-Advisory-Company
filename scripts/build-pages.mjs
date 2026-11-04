import { spawnSync } from 'node:child_process';
import { copyFileSync } from 'node:fs';

// Preserve the repository's existing GitHub Pages deployment without changing root hosting.
const repository = 'Aishawarya-Redevelopment-Advisory-Company';
const result = spawnSync(process.execPath, ['node_modules/vite/bin/vite.js', 'build', '--configLoader', 'runner'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    VITE_BASE_PATH: `/${repository}/`,
    VITE_SITE_ORIGIN: `https://skdigitalsolution.github.io/${repository}`,
  },
});
if (result.status !== 0) process.exit(result.status ?? 1);
copyFileSync('dist/index.html', 'dist/404.html');
