# W3C HTML Validation for PostHTML

Checks if HTML is valid to W3C standards using the [W3C Validation Service](https://validator.w3.org/)

## Install

```bash
(sudo) npm i -D posthtml-w3c
```

## Usage
For general usage and build process integration see [PostHTML Docs](https://github.com/posthtml/posthtml#usage)

### Example using Node API

```js
const fs = require('fs')

var posthtml = require('posthtml')

var validate = require('posthtml-w3c')()

var html = fs.readFileSync('./index.html', 'utf8')

posthtml([ validate ])
  .process(html)
  .then(result => console.log(result.html))
```
#### Output
```bash
PostHTML W3C Validation
-----------------------

⚠ info [14:5]
Consider using the “h1” element as a top-level heading only
(all “h1” elements are treated as top-level headings by many
screen readers and other tools).

⚠ info [19:5]
Consider using the “h1” element as a top-level heading only
(all “h1” elements are treated as top-level headings by many
screen readers and other tools).

⚠ info [18:5]
Consider using the “h1” element as a top-level heading only
(all “h1” elements are treated as top-level headings by many
screen readers and other tools).

⚠  3 Errors
```
