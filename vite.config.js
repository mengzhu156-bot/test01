import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use relative asset URLs so the built portfolio also works when opened
// directly from dist/index.html, instead of requiring a web server at `/`.
export default defineConfig({
  base: './',
  plugins: [react()],
});
