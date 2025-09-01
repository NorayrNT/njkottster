import { defineConfig } from 'vite';
import { vitePlugin as kottster } from '@kottster/react';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './app',
  server: {
    host: "0.0.0.0",   // listen on all interfaces so nginx can reach it
    port: 5480,
    open: false,
    allowedHosts: ['kottster.nuevojob.com'],
    origin: "http://kottster.nuevojob.com",  // tell Vite what public URL it should use
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