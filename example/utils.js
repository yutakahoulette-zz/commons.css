import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('Utils', 'utils')
  , h('pre.w--50.border', '.w--50')
  , h('pre.w--100.border', '.w--100')
  , h('pre.w--200.border', '.w--200')
  , h('pre.w--300.border', '.w--300')
  , h('pre.w--400.border', '.w--400')
  , h('pre.w--500.border', '.w--500')
  , h('pre.w--600.border', '.w--600')
  , h('pre.w--700.border', '.w--700')
  , h('pre.w--800.border', '.w--800')
  , h('pre.w--full.border', '.w--full')
  , h('pre.mt1.bg--white.sh--1.p1.inline-block', '.sh--1')
  , h('br')
  , h('pre.mt1.bg--white.sh--2.p1.inline-block', '.sh--2')
  , h('br')
  , h('pre.mt1.bg--white.sh--3.p1.inline-block', '.sh--3')
  , h('pre.small', '.small')
  , h('pre.nano', '.nano')
  ])

