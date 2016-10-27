import h from 'snabbdom/h'
import title from './title'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Shadow')
  , h('pre.p-3.sh-1', '.sh-1')
  , h('pre.p-3.sh-2', '.sh-2')
  , h('pre.p-3.sh-3', '.sh-3')
  , h('pre.p-3.sh-4', '.sh-4')
  ])
  return section('shadow', content)
}

