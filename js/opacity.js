import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'


module.exports = _ => {
  const content = h('div', [
    title('Opacity')
  , code(
`.opacity-0   { opacity: 0 }
.opacity-025 { opacity: .25 }
.opacity-05  { opacity: .5 }
.opacity-075 { opacity: .75 }
.opacity-1   { opacity: 1 }`, 'css')
  ])
  return section('opacity', content)
}


