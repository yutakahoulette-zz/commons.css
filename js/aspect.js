const R = require('ramda')
const h  = require('snabbdom/h')
const code = require('./code')

const aspects = [
  '1x1'
, '1x2'
, '2x1'
, '2x3'
, '3x2'
, '3x4'
, '4x3'
]

const box = aspect => 
  h(`div.mb-1.aspect.aspect-${aspect}.col-5.md-col-8.sm-col-12`, [h('div.p-2.border.code', `.aspect.aspect-${aspect}`)])

const demo = h('div.mt-2', R.map(box, aspects))
  
module.exports = 
  h('div', [
     h('p', 'Sets a specific aspect ratio.')  
   , demo
   , code(`
<div class='aspect aspect-1x1'>
  <div>I'm a square</div>
</div>
`, 'html')
  ])

