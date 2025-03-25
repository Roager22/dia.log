// This file contains server hooks for SvelteKit
// You can add more hooks as needed following the SvelteKit documentation

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  return await resolve(event);
}