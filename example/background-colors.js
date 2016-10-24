import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('background colors')
  , h('pre.mt2.p-1.bg-white', '.bg-white')
  , h('pre.p-1.bg-grey-1', '.bg-grey-1')
  , h('pre.p-1.bg-grey-2', '.bg-grey-2')
  , h('pre.p-1.bg-grey-3', '.bg-grey-3')
  , h('pre.p-1.bg-grey-4', '.bg-grey-4')
  , h('pre.p-1.bg-grey-5', '.bg-grey-5')
  , h('pre.p-1.bg-scrim-1', '.bg-scrim-1 (transparent)')
  , h('pre.p-1.bg-scrim-2.color-white', '.bg-srim-2 (transparent)')
  , h('pre.p-1.bg-pink', '.bg-pink')
  , h('pre.p-1.bg-lightYellow', '.bg-lightYellow')
  , h('pre.p-1.bg-lightGreen', '.bg-lightGreen')
  , h('pre.p-1.bg-lightBlue', '.bg-lightBlue')
  ])
