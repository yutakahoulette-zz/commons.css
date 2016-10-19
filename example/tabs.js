import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('Tabs', 'tabs')
  , h('div.table.p2.border.rounded.mb3.bg--white', [
      h('span.table-cell.align-middle.pr2', [
        h('p.bold.mt0', 'Horizontal tabs')
      , h('ul.tabs--h', [
            h('li.selected.mr1', 'Apple')
          , h('li.mr1', 'Kiwi')
          , h('li', 'Lychee')
        ])
      ])
    , h('span.table-cell.align-middle.bg--grey--1.px2', [
        h('pre', "<ul class='tabs--h'>\n" +
          "  <li class='selected'>Apple</li>\n" + 
          "  <li>Kiwi</li>\n" +
          "  <li>Lychee</li>\n" +
          "</ul>")
      ])
    ])
  , h('div.table.p2.border.rounded.mb3.bg--white', [
      h('span.table-cell.align-middle.pr2', [
        h('p.bold.mt0', 'Vertical tabs')
      , h('ul.tabs--v', [
            h('li.mr1', 'Apple')
          , h('li.selected.mr1', 'Kiwi')
          , h('li', 'Lychee')
        ])
      ])
    , h('span.table-cell.align-middle.bg--grey--1.px2', [
        h('pre', "<ul class='tabs--v'>\n" +
          "  <li>Apple</li>\n" + 
          "  <li class='selected'>Kiwi</li>\n" +
          "  <li>Lychee</li>\n" +
          "</ul>")
      ])
    ])
  ])

