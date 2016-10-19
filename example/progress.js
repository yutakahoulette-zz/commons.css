import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('Progress bar', 'progress')
  , h('div.table.p2.border.rounded.bg--white', [
      h('span.table-cell.col-7.align-middle.pr2', [
        h('p.italic.mt0.mb3', 'To change the height, you can add a type-scale class.')
      , h('span.progress.bg--grey--1.mb3', [
          h('span', {style: {width: '80%'}})
        ])
      , h('span.progress.bg--grey--1.h2', [
          h('span', {style: {width: '20%'}})
        ])
      ])
    , h('span.table-cell.align-middle.bg--grey--1.px2', [
        h('pre', "<span class='progress'>\n" +
        "  <span style='width:80%;'></span>\n" +
        "</span>")
      , h('pre', "<span class='progress.h2'>\n" +
        "  <span style='width:20%;'></span>\n" +
        "</span>")
      ])
    ])
  ])


