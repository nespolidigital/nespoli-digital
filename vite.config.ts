import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          'obra-facil': path.resolve(__dirname, 'obra-facil.html'),
          dinlab: path.resolve(__dirname, 'dinlab.html'),
          investmap: path.resolve(__dirname, 'investmap.html'),
          portfy: path.resolve(__dirname, 'portfy.html'),
          fitmap: path.resolve(__dirname, 'fitmap.html'),
          bandflow: path.resolve(__dirname, 'bandflow.html'),
          'mercado-facil': path.resolve(__dirname, 'mercado-facil.html')
        }
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
