import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  test: {
    coverage: {
      reporter: ['cobertura', 'text-summary'],
      reportsDirectory: 'coverage'
    }
  },
  plugins: [
    swc.vite({
      module: { type: 'nodenext' }
    })
  ]
});
