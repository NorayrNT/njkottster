import { defineConfig } from 'vite';
import { vitePlugin as kottster } from '@kottster/react';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './app',
  server: {
    port: 5480,
    open: false,
    allowedHosts: ['kottster.nuevojob.com']
  },
  build: {
    outDir: '../dist/client',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    kottster(),
    react(),
  ],
  resolve: {
    alias: {
      '@': '/app'
    }
  },
});