const path = require('path')
const html = require('./html')

const config = {
  publicPath: '/',
  outputPath: path.resolve(__dirname, '../../build'),
  server: {
    host: 'localhost',
    port: process.env.PORT || 3000,
  },
  browsers: [
    // general
    '> 1%',
    'last 4 versions',

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
  html,
}

module.exports = config
