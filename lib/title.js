'use strict'

let chalk = require('chalk')

exports = module.exports = function (title) {
  return console.log(chalk.blue.bold.underline(title))
}
