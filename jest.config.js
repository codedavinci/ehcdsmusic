const path = require('path')

module.exports = {
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/__mocks__/fileMock.js',
  },
  setupTestFrameworkScriptFile: path.resolve(
    'node_modules/jest-enzyme/lib/index.js'
  ),
  testEnvironment: 'enzyme',
}
