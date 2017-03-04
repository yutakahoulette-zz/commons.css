const h = require('snabbdom/h')
const warn = require('./brand-warn')
const code = require('./code')

module.exports = 
  h('div', [
    warn
  , h('p.bold', 'Horizontal tabs')
  , h('ul.tabs--h', [
        h('li.is-selected.mr-1', 'Apple')
      , h('li.mr-1', 'Kiwi')
      , h('li', 'Lychee')
    ])
  , code(
`<ul class='tabs--h'>
  <li class='is-selected'>Apple</li>
  <li>Kiwi</li>
  <li>Lychee</li>
</ul>`)
  , h('p.bold', 'Vertical tabs')
  , h('ul.tabs--v', [
        h('li', 'Apple')
      , h('li.is-selected', 'Kiwi')
      , h('li', 'Lychee')
    ])
  , code(
`<ul class='tabs--v'>
  <li>Apple</li>
  <li class='is-selected'>Kiwi</li>
  <li>Lychee</li>
</ul>`)
  ])

