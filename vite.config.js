import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
//This is a new comment 
//
//This is another comment2
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
