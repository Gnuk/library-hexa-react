import { defineConfig } from 'vite';
import * as path from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    port: 3030,
  },
  envDir: path.resolve(__dirname, 'config', 'svelte'),
  build: {
    rollupOptions: {
      external: [new RegExp(/\.vue/)],
    },
  },
});
