import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  ...(process.env.VITE_HOSTINGER_BUILD === 'true' ? {
    define: { 'import.meta.env.VITE_SITE_ORIGIN': JSON.stringify(process.env.VITE_SITE_ORIGIN || '') },
  } : {}),
});
