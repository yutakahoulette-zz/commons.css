import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Background')
  , code(
`.bg-cover {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.bg-contain {
  background-size: contain;
  background-repeat: no-repeat;
}`, 'css')
  ])
  return section('background', content)
}

