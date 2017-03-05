const h = require('snabbdom/h')
const code = require('./code')
const responsiveText = require('./responsive-text')

const demo = h('div.clearfix.code', [
  h('div.border.p-2.col.col-4.md-col-6.sm-col-12', '.col-4.md-col-6.sm-col-12')
, h('div.border.p-2.col.col-4.md-col-6.sm-col-12', '.col-4.md-col-6.sm-col-12')
, h('div.border.p-2.col.col-4.md-col-12', '.col-4.md-col-12')
])

module.exports = 
h('div', [
  demo
, h('p.helpBox--success', responsiveText) 
, code(
`.col       { float: left }
.col-right { float: right }
.col-1  { width: 8.33333% }
.col-2  { width: 16.66667% }
.col-3  { width: 25% }
.col-4  { width: 33.33333% }
.col-5  { width: 41.66667% }
.col-6  { width: 50% }
.col-7  { width: 58.33333% }
.col-8  { width: 66.66667% }
.col-9  { width: 75% }
.col-10 { width: 83.33333% }
.col-11 { width: 91.66667% }
.col-12 { width: 100% }`, 'css')
])

