import h from 'snabbdom/h'
import title from './title'
import section from './section'
import greyWarn from './grey-warn'

module.exports = _ => {
  const content = h('div', [
    title('Color')
  , greyWarn()
  , h('pre.color-white.bg-grey-5.inline-block.mb-0', '.color-white')
  , h('pre.color-black', '.color-black')
  , h('pre.color-grey', '.color-grey')
  ])
  return section('color', content)
}
