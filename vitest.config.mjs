import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  test: {
    globals: true,
    include: ['*.spec.ts'],
    coverage: {
      include: ['**/*.ts'],
      reporter: ['cobertura', 'text-summary'],
      provider: 'istanbul',
      // Prevent deletion of coverage directory
      clean: false,
      reportsDirectory: 'coverage'
    }
  },
  plugins: [
    swc.vite({
      module: { type: 'nodenext' }
    })
  ]
});
