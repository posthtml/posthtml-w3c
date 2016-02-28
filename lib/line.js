'use strict'

let chalk = require('chalk')

exports = module.exports = function (line, column) {
  if (line === undefined) {
    line = 0
  }
  if (column === undefined) {
    column = 0
  }
  return chalk.blue(`line: ${line}:${column}`)
}
