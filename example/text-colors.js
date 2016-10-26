import h from 'snabbdom/h'
import title from './title'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Text colors')
  , h('pre.bg-grey-5.color-white.inline-block.m-0', '.color-white')
  , h('pre.color-black', '.color-black')
  , h('pre.color-grey', '.color-grey')
  , h('pre.color-blue', '.color-blue')
  , h('pre.color-red', '.color-red')
  , h('pre.color-green', '.color-green')
  ])
  return section('text-colors', content)
}
