'use strict'

let chalk = require('chalk')

exports = module.exports = function (type) {
  return chalk.blue(`type: ${type}`)
}
