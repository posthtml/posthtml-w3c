'use strict'

const fs = require('fs')

let posthtml = require('posthtml')

let w3c = require('../index')()

let html = fs.readFileSync('test/index.html', 'utf-8')

posthtml([ w3c ])
  .process(html.toString())
  .then(result => result.html)
