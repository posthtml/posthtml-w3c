// ------------------------------------
// #POSTHTML - W3C
// ------------------------------------

'use strict'

var pretty = require('chalk')
var render = require('posthtml-render')
var w3c = require('w3cjs')

var error = require('./lib/error')
var line = require('./lib/line')

exports = module.exports = function(options) {
    options = options || {}

    return function postHTMLValidate (tree) {

        let result = w3c.validate({
            input: render(tree),
            output: 'json',

            callback: function (res) {
              console.log(pretty.blue.bold('W3C Validation Results'))
              let err = 0

                res.messages.forEach(msg => {

                  for (let i = 0; i < res.messages.length; i++) {

                    console.log(pretty.red.bold(`\n=> Error ${i}\n`))
                    error(msg.type)
                    line(msg.lastLine, msg.firstColumn, msg.lastColumn)

                    console.log(pretty.magenta(msg.message))
                    err = i
                  }
                })
                if (err === 0) {
                  console.log(pretty.green(`\n=> Finished with ${err} Errors`))
                }
                console.log(pretty.red.bold(`\n=> Finished founding ${err} Errors`))
            }
        })
        return tree
    }
}
