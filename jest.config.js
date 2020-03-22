module.exports = {
  verbose: true,
  rootDir: './',
  roots: ['<rootDir>/test'],
  moduleNameMapper: {
    '^build(.*)': '<rootDir>/build/$1',
    '^fn(.*)': '<rootDir>/build/fn/$1',
    '^constants(.*)': '<rootDir>/build/constants/$1',
    '^utils(.*)': '<rootDir>/build/utils/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['build/**/*.js'],
};
