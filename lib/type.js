'use strict'

let chalk = require('chalk')
let log = require('log-symbols')

exports = module.exports = function (type) {
  if (type === 'info') {
    return chalk.yellow(`${log.warning + ' ' + type}`)
  }
  return chalk.red(`${log.error + ' ' + type}`)
}
