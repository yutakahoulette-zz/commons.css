import h from 'snabbdom/h'

module.exports = _ => 
  h('div', [
    h('ul', [
      h('li', 'Background colors')
    , h('li', 'Text colors')
    , h('li', 'Buttons')
    , h('li', 'Tables')
    , h('li', 'Inputs')
    , h('li', 'Checkboxes')
    , h('li', 'Form Elements')
    ])
  ])
