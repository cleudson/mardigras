module.exports = {
  verbose: true,
  rootDir: '../',
  roots: ['<rootDir>/test'],
  moduleNameMapper: {
    '^src(.*)': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
};
