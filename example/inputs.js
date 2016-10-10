import h from 'snabbdom/h'

module.exports = _ =>
  h('div', [
    h('h1', 'Form Elements')
  , h('form.border.p2.bg--lightGrey', [
      h('fieldset', [
        h('label.block', 'Fruit')
      , h('input', {props: {type: 'text'}})
      ])
    , h('fieldset', [
        h('label.block', 'Amount')
      , h('span.prepend', [
          h('span', '$')
        , h('input', {props: {type: 'number'}})
        ])
      ])
    ])
 , h('pre', "<span class='prepend'>\n  <span>$</span>\n  <input type='number'>\n</span>")
  ])
