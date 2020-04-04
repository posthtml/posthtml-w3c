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

  return async function postHTMLValidate (tree) {

    return new Promise(resolve => {

      w3c.validate({
        input: render(tree),
        output: 'json',
        callback: function (err, res) {
          res.messages.shift()
          res.messages.shift()

          title('\nPostHTML W3C Validation')

          let table = tab(res.messages.map(msg => {
            let row = [
              `\n${type(msg.type) + ' ' + line(msg.lastLine, msg.firstColumn)}`,
              `\n${message(msg.message)}`
            ]

            return row
          }), {align: 'l', hsep: ''})

          console.log(table)

          let result = res.messages.length

          if (result === 0) {
            console.log(chalk.green(`\n${log.succes}  ${result} Errors`))
          }
          console.log(chalk.red(`\n${log.warning}  ${result} Errors`))

          resolve(tree);
        }
      })

    })
  }
}
