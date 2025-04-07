/** @type {import('jest').Config} */
const jestConfig = {
  preset: 'ts-jest/presets/js-with-ts-esm',
  resolver: 'ts-jest-resolver',
  testEnvironment: 'node',
  testRegex: '.*\.spec\\..*$',
  rootDir: '.',
  coverageDirectory: 'coverage',
  coverageReporters: [
    'cobertura',
    'text-summary'
  ]
};
export default jestConfig;
