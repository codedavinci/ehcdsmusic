const path = require('path')

module.exports = {
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  moduleNameMapper: {
    '^.+\\.css$': path.resolve('config/jest/__mocks__/styleMock.js'),
    '.+\\.(css|styl|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    transform: {
      '^.+\\.jsx$': 'babel-jest',
      '^.+\\.js$': 'babel-jest',
    },
  },
}
