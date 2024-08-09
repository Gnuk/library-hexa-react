import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    port: 3030,
  },
  envDir: path.resolve(__dirname, 'config', 'vue'),
  build: {
    rollupOptions: {
      external: [new RegExp(/\.svelte/)],
    },
  },
});
