import h from 'snabbdom/h'
import title from './title'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Help box')
  , h('div.max-width-300', [
      h('div.mb-2.helpBox--green', [h('pre.m-0', '.helpBox--green')])
    , h('div.mb-2.helpBox--yellow', [h('pre.m-0', '.helpBox--yellow')])
    , h('div.helpBox--red', [h('pre.m-0', '.helpBox--red')])
    ])
  ])
  return section('help-box', content)
}
