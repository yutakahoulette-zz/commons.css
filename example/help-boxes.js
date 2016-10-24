import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('help boxes')
  , h('div.max-width-1', [
      h('div.mb-2.helpBox--green', [h('pre.m-0', '.helpBox--green')])
    , h('div.mb-2.helpBox--yellow', [h('pre.m-0', '.helpBox--yellow')])
    , h('div.helpBox--red', [h('pre.m-0', '.helpBox--red')])
    ])
  ])

