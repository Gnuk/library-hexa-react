import { defineConfig } from 'vitest/config';
import * as path from 'path';

export default defineConfig({
  test: {
    include: ['test/unit/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    environment: 'jsdom',
    coverage: {
      include: ['src/**/*'],
      provider: 'v8',
      exclude: [
        'src/*.{ts,tsx,vue}',
        '**/{index,react,vue}.{ts,tsx}',
        'src/**/primary/**/*',
        'src/**/application/**/*',
        'src/modal/**/*',
        'src/static/**/*',
      ],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
