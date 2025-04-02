import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    port: 5173,
    allowedHosts: [
      '3d2b-95-217-161-128.ngrok-free.app',
      'd31f-95-217-161-128.ngrok-free.app'
    ],
    cors: {
      origin: ['https://3d2b-95-217-161-128.ngrok-free.app', 'https://d31f-95-217-161-128.ngrok-free.app'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  }
})
