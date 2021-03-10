module.exports = wallaby => ({
  files: [
    'src/**/*.js',
    'src/**/*.json',
    '!src/**/*.u.test.js',
    '!src/**/*.i.test.js'
  ],

  tests: ['src/**/*.u.test.js'],

  // do not cover third-party library
  filesWithNoCoverageCalculated: [],

  hints: {
    ignoreCoverage: /ignore file coverage/
  },

  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },
  testFramework: 'jest',
  env: {
    type: 'node'
  },

  trace: true,

  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  },

  runMode: 'onsave'
})
