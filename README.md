# Package HTML for PostHTML
! In development !

Common [PostHTML Plugins](https://maltsev.github.io/posthtml-plugins/) for HTML files

## Install

```bash
(sudo) npm i -D posthtml
(sudo) npm i -D posthtml-package-html
```

## Plugins
- [posthtml-bem](https://github.com/rajdee/posthtml-bem)
- [posthtml-each](https://github.com/Gurylev/posthtml-each)
- [posthtml-extend](https://github.com/maltsev/posthtml-extend)
- [posthtml-doctype](https://github.com/posthtml/posthtml-doctype)
- [posthtml-include](https://github.com/posthtml/posthtml-include)
- [posthtml-custom-elements](https://github.com/posthtml/posthtml-custom-elements)

## Defaults

```js
{
  doctype: {
    doctype: 'HTML 5'
  }
  include: {
    root: './',
    encoding: 'uft-8'
  },
  extend: {
    root: './',
    encoding: 'utf-8'
  },
  bem: {
      elemPrefix: '__',
      modPrefix: '--',
      modDlmtr: '-'
  }
}
```

## Usage
For general usage and build process integration see [PostHTML Docs](https://github.com/posthtml/posthtml#usage)

### Example using Node API
#### Default

```js
var posthtml = require('posthtml')

var html = require('posthtml-package-html')(/* options */)

var source = `<div block="block"><h1 elem="title">Title</h1><p elem="text" mods="red">Text</p></div>`

posthtml(html)
  .process(source)
  .then(result => console.log(result.html))

  // <div class="block">
  //   <h1 class="block__title">Title</h1>
  //   <p class="block__text block__text--red">Text</p>
  // </div>
```

#### With custom options

```js
var posthtml = require('posthtml')

var html = require('posthtml-package-html')({
  bem: { elemPrefix: '_', modPrefix: '-', modDlmtr: '--' }
  // Options for each plugin contained in the package...
})

var source = `<div block="block"><h1 elem="title">Title</h1><p elem="text" mods="red">Text</p></div>`

posthtml(html)
  .process(source)
  .then(result => console.log(result.html))

  // <div class="block">
  //   <h1 class="block_title">Title</h1>
  //   <p class="block_text block_text-red">Text</p>
  // </div>
```

#### With other plugins or packages

```js
var posthtml = require('posthtml')


var html = require('posthtml-package-html')()

// Your awesome package
var pkg = require('posthtml-package-awesome')()

// And/or additional plugins e.g posthtml-style-to-file
var plugin = require('posthtml-style-to-file')({ path: './dist/style.css'})



var source = `<div block="block" style="background: #fff;"><h1 elem="title" style="font-size: 3em;">Title</h1><p elem="text" mods="red" style="color: red;">Text</p></div>`

posthtml(html.concat(pkg, [ plugin/*, add more plugins */ ]))
  .process(source)
  .then(result => console.log(result.html))

  // <!DOCTYPE html>
  //   <div class="block">
  //     <h1 class="block_title">Title</h1>
  //     <p class="block_text block_text-red">Text</p>
  //     <!--- something awesome --->
  //   </div>
```

##### Output

```css
div.block{background: #fff;}
h1.block__title{font-size: 3em;}
p.block__text.block__text--red{color: red;}
```
