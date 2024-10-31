/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */

const { pathsToModuleNameMapper } = require('ts-jest')
// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig')

console.log(pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),)

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths /*, { prefix: '<rootDir>/' } */),
  transform: {
    "^.+\\.spec.ts?$": "ts-jest"
  }
}