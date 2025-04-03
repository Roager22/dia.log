import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $assets: path.resolve('./src/assets')
    }
  },
  preprocess: vitePreprocess()
};

export default config;
