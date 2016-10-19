import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
      header('Lists', 'lists')
    , h('div.inline-block.col-6', [
        h('ul', [
          h('li', 'One')
        , h('li', 'Two')
        , h('li', 'Three')
        , h('ul', [
            h('li', 'One')
          , h('li', 'Two')
          , h('li', 'Three')
          , h('ul', [
              h('li', 'One')
            , h('li', 'Two')
            , h('li', 'Three')
            ])
          ])
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
