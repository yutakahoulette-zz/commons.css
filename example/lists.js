import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
      header('Lists', 'lists')
    , h('div.table.inline-block.bg--white.rounded.border.p2', [
        h('div.table-cell', [
          h('p.mt0.bold', 'Unordered')
        , h('ul', [
            h('li', 'Pizza')
          , h('li', 'Porphyry')
          , h('li', 'Pyroxenite')
          , h('ul', [
              h('li', 'Burrito')
            , h('li', 'Quartz monzonite')
            , h('li', 'Phonolite')
            ])
          ])
        ])
      , h('div.table-cell.pl4.pr1', [
          h('p.mt0.bold', 'Ordered')
        , h('ol', [
              h('li', 'いち')
            , h('li', 'に')
            , h('li', 'さん')
          ])
        ])
      ])
  ])
