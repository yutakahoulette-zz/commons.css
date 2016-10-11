import h from 'snabbdom/h'

module.exports = _ =>
  h('div', [
    h('h2', 'Form Elements')
  , h('form', [
      h('fieldset.mb2', [
        h('label.block.mb1', 'Text input')
      , h('input', {props: {type: 'text'}})
      ])
    , h('fieldset.mb2', [
        h('label.block.mb1', 'Number input with dollar prepended')
      , h('span.prepend', [
          h('span', '$')
        , h('input', {props: {type: 'number'}})
        ])
      ])
    , h('fieldset.mb2', [
        h('label.block.mb1', 'Select with triangle appended')
      , h('span.append', [
          h('span', '▾')
        , h('select', [
            h('option', 'Select One')
          , h('option', 'Blue pill')
          , h('option', 'Red pill')
          ])
        ])
      ])
    , h('fieldset.mb2', [
        h('label.block.mb1', 'Textarea')
      , h('textarea', {props: {type: 'text'}})
      ])
    , h('fieldset.mb2', [
        h('div', [
          h('input', {props: {type: 'radio', id: 'radio1', name: 'radio'}})
        , h('label', {attrs: {for: 'radio1'}}, 'Heads')
        ])
      , h('div', [
          h('input', {props: {type: 'radio', id: 'radio2', name: 'radio'}})
        , h('label', {attrs: {for: 'radio2'}}, 'Tails')
        ])
      ])
    , h('fieldset.mb2', [
        h('div', [
          h('input', {props: {type: 'checkbox', id: 'check1', name: 'check'}})
        , h('label', {attrs: {for: 'check1'}}, 'Pizza')
        ])
      , h('div', [
          h('input', {props: {type: 'checkbox', id: 'check2', name: 'check'}})
        , h('label', {attrs: {for: 'check2'}}, 'Tacos')
        ])
      ])
    ])
  ])
