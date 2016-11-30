import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Disabled')
  , code(
`.disabled, 
*:disabled {
  pointer-events: none;
  opacity: 0.5;
}`, 'css')
  ])
  return section('disabled', content)
}

