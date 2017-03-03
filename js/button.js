const h = require('snabbdom/h')
const warn = require('./brand-warn')
const code = require('./code')

module.exports = 
   h('div', [
    warn
  , h('p.mb-3', ['If you would like to apply a button style to a non-button element (an anchor tag, for example), you can add the ',  h('span.code', '.btn'),  ' class'])
  , h('div.mb-3', [
      h('button', 'Learn more')
    , h('div.mt-1.code', 'default')
    ])
  , h('div.mb-3', [
      h('button', {props: {disabled : true}}, 'Loading...')
    , h('div.mt-1.code', '.disabled')
    ])
  , h('p.mb-3', [
      'Instead of creating additional BEM style classes for buttons, such as '
    , h('div.inline.bg-grey-2', '.btn--large') 
    , ', you can combine utility classes such as type-scale, line-height, border and padding, to create button variations.' 
    ])
  , h('div.mb-3', [
      h('button.h4.uppercase', 'Large upppercase')
    , h('div.mt-1.code', 'button.h4.uppercase')
    ])
  , h('div.mb-3', [
      h('button.p-2.bold', 'Bold and padded')
    , h('div.mt-1.code', 'button.p-2.bold')
    ])
  , h('div.mb-3', [
      h('button.pill.line-height-1', 'Pill shaped')
    , h('div.mt-1.code', 'button.pill.line-height-1')
    ])
  , h('div.mb-3', [
      h('button.not-rounded.sh-2', 'Shadow')
    , h('div.mt-1.code', 'button.not-rounded.sh-1')
    ])
  , h('p.mb-3', 'To create a connected group of buttons, wrap your buttons or .btn classes in an element with the .buttons class')
  , h('div.buttons', [
      h('button', 'Guitar')
    , h('button', 'Bass')
    , h('button', 'Gong')
    , h('button', 'Tuba')
    ])
  , code(
`<div class='buttons'>
  <button>Guitar</button>
  <button>Bass</button>
  <button>Gong</button>
  <button>Tuba</button>
</div>`)
  ])

