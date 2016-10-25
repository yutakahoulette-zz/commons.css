import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
      header('lists')
    , h('p.m-0.bold', 'Unordered')
    , h('ul.mb-3', [
        h('li', 'Pizza')
      , h('li', 'Porphyry')
      , h('li', 'Pyroxenite')
      , h('ul', [
          h('li', 'Burrito')
        , h('li', 'Quartz monzonite')
        , h('li', 'Phonolite')
        ])
      ])
    , h('p.bold.m-0', 'Ordered')
    , h('ol', [
          h('li', 'いち')
        , h('li', 'に')
        , h('li', 'さん')
      ])
  ])
