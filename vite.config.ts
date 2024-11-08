import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] })],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
      lib: path.resolve(__dirname, 'lib'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'], // remove code from bundle
    },
  },
});
