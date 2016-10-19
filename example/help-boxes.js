import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('Help Boxes', '')
  , h('div.max-width-1.bg--white.border.rounded.p2', [
      h('div.mb2.helpBox--green', [h('pre.m0', '.helpBox--green')])
    , h('div.mb2.helpBox--yellow', [h('pre.m0', '.helpBox--yellow')])
    , h('div.helpBox--red', [h('pre.m0', '.helpBox--red')])
    ])
  ])

