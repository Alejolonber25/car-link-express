module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/domain/**/*.{ts,tsx}',
    'src/infrastructure/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/presentation/**',
    '!src/domain/exceptions/**',
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'coverage',
        outputName: 'junit-report.xml',
      },
    ],
  ],
  coverageReporters: ['lcov', 'text-summary'],
  testResultsProcessor: 'jest-sonar-reporter',
}
