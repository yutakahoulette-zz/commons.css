import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Misc')
  , code(
`.no-transform { transform: none !important }

.no-select { user-select: none }

.container {
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
}

.vertically-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}`, 'css')
  ])
  return section('misc', content)
}

