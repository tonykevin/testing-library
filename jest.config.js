const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  collectCoverage: true,
  coverageDirectory: "./coverage",
  coverageThreshold: {
    global: {
      statement: 50,
      branches: 50,
      functions: 50,
      lines: 50
    },
    "./src/stats.ts": {
      statement: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
};