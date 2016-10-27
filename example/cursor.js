import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'


module.exports = _ => {
  const content = h('div', [
    title('Cursor')
  , code(
`.cursor-pointer     { cursor: pointer }
.cursor-not-allowed { cursor: not-allowed }
.cursor-initial     { cursor: initial }`, 'css')
  ])
  return section('cursor', content)
}


