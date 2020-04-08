// ------------------------------------
// #POSTHTML - W3C
// ------------------------------------

'use strict'

let chalk = require('chalk')
let tab = require('text-table')
let log = require('log-symbols')

let render = require('posthtml-render')
let w3c = require('w3cjs')

let title = require('./lib/title')
let type = require('./lib/type')
let line = require('./lib/line')
let message = require('./lib/msg')

exports = module.exports = function (options) {
  options = options || {}
  options.filter = options.filter || [];

  return function postHTMLValidate (tree) {

    return new Promise(resolve => {

      w3c.validate({
        input: render(tree),
        output: 'json',
        callback: function (err, res) {
          res.messages.shift()
          res.messages.shift()

          const filtered = res.messages
            .filter(msg => !options.filter.some(s => msg.message.includes(s)))

          let table = tab(filtered.map(msg => {
            let row = [
              `\n${type(msg.type) + ' ' + line(msg.lastLine, msg.firstColumn)}`,
              `\n${message(msg.message)}`
            ]

            return row
          }), {align: 'l', hsep: ''})

          let result = filtered.length

          if (result > 0 || !options.hideEmpty) {
            title('\nPostHTML W3C Validation')
          }

          if (result > 0) {
            console.log(table)
          }

          if (result === 0 && !options.hideEmpty) {
            console.log(chalk.green(`\n${log.success}  ${result} Errors`))
          } else if (result > 0) {
            console.log(chalk.red(`\n${log.warning}  ${result} Errors`))
          }

          resolve(tree);
        }
      })

    })
  }
}
