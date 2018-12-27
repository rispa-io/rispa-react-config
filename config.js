const path = require('path')
const renderHtml = require('./html')

const outputPath = path.resolve(__dirname, '../../build')

const config = {
  publicPath: '/',
  outputPath,
  context: path.resolve(outputPath, '..'),
  server: {
    host: 'localhost',
    port: process.env.PORT || 3000,
  },
  browsers: [
    // general
    '> 0.25%',

    // desktop
    'Explorer >= 11',

    // mobile
    'iOS >= 7.1',
    'Android >= 4.4',
    'UCAndroid >= 11.4',
    'Samsung >= 4',

    // exceptions
    'not Explorer <= 10',
    'not ExplorerMobile <= 10',
    'not OperaMini all',
    'not last 4 OperaMobile versions',
    'not last 4 Baidu versions',
    'not BlackBerry <= 9',
  ],
  renderHtml,
}

module.exports = config
