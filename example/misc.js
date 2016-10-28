import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Misc')
  , code(
`.no-transform {
  transform: none !important;
}

.container {
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
}`, 'css')
  ])
  return section('misc', content)
}





