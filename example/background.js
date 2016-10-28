import h from 'snabbdom/h'
import title from './title'
import section from './section'
import greyWarn from './grey-warn'

module.exports = _ => {
  const content = h('div', [
    title('Background')
  , greyWarn()
  , h('pre.p-1.bg-grey-1', '.bg-grey-1')
  , h('pre.p-1.bg-grey-2', '.bg-grey-2')
  , h('pre.p-1.bg-grey-3', '.bg-grey-3')
  , h('pre.p-1.bg-grey-4', '.bg-grey-4')
  , h('pre.p-1.bg-grey-5', '.bg-grey-5')
  , h('pre.p-1.bg-scrim-1', '.bg-scrim-1 (transparent)')
  , h('pre.p-1.bg-scrim-2.color-white', '.bg-srim-2 (transparent)')
  ])
  return section('background', content)
}
