import h from 'snabbdom/h'
import title from './title'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Help box')
  , h('div', [
      h('div.mb-2.helpBox--success', [h('pre.m-0', '.helpBox--success')])
    , h('div.mb-2.helpBox--warn', [h('pre.m-0', '.helpBox--warn')])
    , h('div.helpBox--error', [h('pre.m-0', '.helpBox--error')])
    ])
  ])
  return section('help-box', content)
}
