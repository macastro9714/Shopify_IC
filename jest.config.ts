import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  collectCoverage: true,
  collectCoverageFrom: ["!src/types/**/*.ts", "src/**/*"],
  coveragePathIgnorePatterns: [".*snap$", "/node_modules/"],
  coverageReporters: ["lcov", "text", "cobertura"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    "^@components$": "<rootDir>/src/components",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@store$": "<rootDir>/src/store",
    "^@store/(.*)$": "<rootDir>/src/store/$1",
    "^@types$": "<rootDir>/src/types",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
    "\\.(css|scss)$": "identity-obj-proxy",
    "@fluentui/react/lib/(.*)$": "@fluentui/react/lib-commonjs/$1",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "\\.(tsx|ts)$": "babel-jest",
    "\\.(svg|jpg)$": "<rootDir>/tests/fileTransformer.js",
  },
};

export default config;
