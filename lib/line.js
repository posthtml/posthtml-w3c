'use strict'

let chalk = require('chalk')

exports = module.exports = function (line, start, end) {
  return console.log(`Line:`, chalk.blue(`${line}:(${start},${end})`))
}
