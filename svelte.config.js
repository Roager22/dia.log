import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // Заменяем adapter-auto на adapter-vercel
    adapter: adapter(),
    
    // Enable SvelteKit's routing system
    alias: {
      $lib: 'src/lib'
    }
  }
};