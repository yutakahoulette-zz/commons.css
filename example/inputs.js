import h from 'snabbdom/h'

module.exports = _ =>
  h('div', [
    h('h2', 'Form Elements')
  , h('form', [
      h('fieldset.mb2', [
        h('label.block.mb1', 'Text')
      , h('input', {props: {type: 'text'}})
      ])
    , h('fieldset.mb2', [
        h('label.block.mb1', 'Prepend number')
      , h('span.prepend', [
          h('span', '$')
        , h('input', {props: {type: 'number'}})
        ])
      ])
    , h('fieldset.mb2', [
        h('label.block.mb1', 'Select')
      , h('span.append.fullWidth', [
          h('span', '▾')
        , h('select', [
            h('option', 'aasdfasdf asdlkj lkjasdflkj laskdfj  sdf')
          , h('option', 'asdf')
          , h('option', 'asdf')
          ])
        ])
      ])
    , h('fieldset.mb2', [
        h('label.block.mb1', 'Text')
      , h('textarea', {props: {type: 'text'}})
      ])
    ])
 , h('pre', "<span class='prepend'>\n  <span>$</span>\n  <input type='number'>\n</span>")
  ])
