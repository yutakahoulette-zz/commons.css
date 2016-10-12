import h from 'snabbdom/h'

module.exports = _ =>
  h('div', [
      h('h3', 'Lists')
    , h('div.inline-block.col-6', [
        h('ul', [
          h('li', 'One')
        , h('li', 'Two')
        , h('li', 'Three')
        ])
      ])
    , h('div.inline-block.col-6', [
        h('ol', [
          h('li', 'One')
        , h('li', 'Two')
        , h('li', 'Three')
        ])
      ])
  ])
