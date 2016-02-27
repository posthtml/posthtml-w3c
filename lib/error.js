'use strict'

let chalk = require('chalk')

exports = module.exports = function (type) {
  return console.log('Type:', chalk.blue(type))
}
