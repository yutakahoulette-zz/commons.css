import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'


module.exports = _ => {
  const content = h('div', [
    title('Hide')
  , code(
`.hide { display:none !important }

@media (max-width: 480px) {
  .sm-hide { display:none !important }
}

@media (min-width: 480px) and (max-width: 780px) {
  .md-hide { display:none !important }
}`, 'css')
  ])
  return section('hide', content)
}

