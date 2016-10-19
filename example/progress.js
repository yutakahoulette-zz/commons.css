import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('Progress', 'progress')
  , h('div.table.p2.bg--grey--2', [
      h('span.table-cell.col-7.align-middle.pr4', [
        h('span.progress', [
          h('span', {style: {width: '80%'}})
        ])
      ])
    , h('span.table-cell.align-middle', [
        h('pre', "<span class='progress'>\n" +
        "  <span style='width:80%;'></span>\n" +
        "</span>")
      ])
    ])
  ])


