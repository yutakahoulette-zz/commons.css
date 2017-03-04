const h = require('snabbdom/h')
const warn = require('./brand-warn')
const code = require('./code')

module.exports = 
  h('div', [
    warn
  , h('span.progressBar.bg-grey-3', [ h('span', {style: {width: '80%'}}) ])
  , code( 
`<span class='progressBar.bg-grey-3'>
  <span style='width:80%;'></span>
</span>`)
  , h('p.mt-3', 'To change the height, just add a type-scale class')
  , h('span.progressBar.h3.bg-grey-3', [ h('span', {style: {width: '20%'}}) ])
  , code( 
`<span class='progressBar.h3.bg-grey-3'>
  <span style='width: 20%'></span>
</span>`)
  , h('p.mt-3', 'To change the border-radius, just add a border class')
  , h('span.progressBar.h2.bg-grey-3.pill', [ h('span', {style: {width: '20%'}}) ])
  , code( 
`<span class='progressBar.h2.bg-grey-3.pill'>
  <span style='width: 20%'></span>
</span>`)
  ])

