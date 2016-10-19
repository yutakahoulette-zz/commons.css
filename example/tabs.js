import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('Tabs', 'tabs')
  , h('ul.tabs--h', [
        h('li.selected.mr1', 'One')
      , h('li.mr1', 'Two')
      , h('li', 'Three')
    ])
  , h('ul.tabs--v', [
        h('li.selected', 'One')
      , h('li', 'Two')
      , h('li', 'Three')
    ])
  ])

