import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://liamkinnally.com',
  redirects: {
    '/projects/aerial-edge-bench': '/projects/aerial-inference-bench',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
