import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cesarhdz.github.io',
  base: process.env.NODE_ENV === 'development' ? '/' : '/job-search-website/',
});
