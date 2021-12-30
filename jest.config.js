module.exports = {
  cacheDirectory: __dirname + "/.jest_cache",
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testRegex: "(.*.(test|spec)).(jsx?|tsx?|ts?)$",
  moduleFileExtensions: ["ts", "js", "json"],
  setupFiles: [],
  collectCoverage: true,
  silent: false,
  verbose: true,
  collectCoverageFrom: [
    "**/src/rules/*.ts",
    "!**/src/rules/index.ts",
    "!**/node_modules/**",
    "!**/*.test.data.ts",
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  reporters: [
    "default"
  ],
  coveragePathIgnorePatterns: [
    ".*test\\.data\\.ts$,migrations.*.ts$,(.*.(test|spec)).(jsx?|tsx?)$,(tests/.*.mock).(jsx?|tsx?)$",
  ],
  coverageReporters: ["json", "lcov", "text", "clover", "cobertura"],
};
