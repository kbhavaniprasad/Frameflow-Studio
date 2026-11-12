import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: mode !== 'production',
      minify: 'esbuild',
      target: 'es2020',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('framer-motion') || id.includes('lucide-react')) {
                return 'vendor';
              }
              return 'vendor';
            }
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || 'asset';
            const info = name.split('.');
            const ext = info[info.length - 1];
            if (/\.(png|jpe?g|gif|svg|webp|avif)$/.test(name)) {
              return `assets/images/[name]-[hash].${ext}`;
            }
            if (/\.(woff2?|ttf|eot)$/.test(name)) {
              return `assets/fonts/[name]-[hash].${ext}`;
            }
            return `assets/[ext]/[name]-[hash].${ext}`;
          },
        },
      },
    },
    server: {
      port: 3000,
      open: true,
      host: true,
    },
    preview: {
      port: 3000,
      open: true,
    },
  };
});
