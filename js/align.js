const R = require('ramda')
const h  = require('snabbdom/h')
const code = require('./code')

const klasses = [
  '.align-baseline'
, '.align-top'
, '.align-middle'
, '.align-bottom']

const cell = klass => h(`span.code.table-cell${klass}`, klass)

module.exports = 
  h('div', [
    h('div.table.bg-grey-1.col-12.mb-2', R.concat([h('p.py-3.opacity-0', 'x')], R.map(cell, klasses)))
  , code(
`<div class='table bg-grey-1'>
  <p class='py-3.opacity-0'>x</p>
  <span class='table-cell.align-baseline'>.align-baseline</span>
  <span class='table-cell.align-top'>.align-top</span>
  <span class='table-cell.align-middle'>.align-middle</span>
  <span class='table-cell.align-bottom'>.align-bottom</span>
</div>`)
  ])


