# W3C HTML Validation for PostHTML

Checks if HTML is valid to W3C standards using the [W3C Validation Service](https://validator.w3.org/)

## Install

```bash
(sudo) npm i -D posthtml-w3c
```

## Usage
For general usage and build process integration see [PostHTML Docs](https://github.com/posthtml/posthtml#usage)

### Options

You can modify the behavior by passing an options object to the method:

```js
var options = {
  filter: [
    'An “img” element must have an “alt” attribute, except under certain conditions.',
  ],
  hideEmpty: true
}

var validate = require('posthtml-w3c')(options)
```

* `filter` - an array of strings to filter the messages. If you want to silence some warnings or errors, you can add a substring of the message to this collection. Any messages that contain a string from the `filter` array will be ignored.
* `hideEmpty` - if `true` and no messages are found, nothing will be printed. If `false` or skipped and no messages are found, the header and summary will be printed. This option is backward-compatible.

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
