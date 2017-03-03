import h from 'snabbdom/h'
import title from './title'
import section from './section'
import warn from './brand-warn'

module.exports = _ => {
  const content = h('div', [
    title('Help box')
  , warn()
  , h('div', [
      h('div.mb-2.helpBox--success', [h('pre.m-0', '.helpBox--success')])
    , h('div.mb-2.helpBox--warn', [h('pre.m-0', '.helpBox--warn')])
    , h('div.helpBox--error', [h('pre.m-0', '.helpBox--error')])
    ])
  ])
  return section('help-box', content)
}
