import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Misc')
  , code(
`
.no-padding-last-child > *:last-child { padding: 0 }

.no-margin-last-child > *:last-child { margin: 0 }

.no-border-last-child > *:last-child { border: none }

.no-transform { transform: none !important }

.no-select { user-select: none }

.transition { transition: .2s ease-out }

.invisible { visibility: hidden }

.container {
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
}

.content-width {
  width: 1%;
  white-space: nowrap;
}

.vertically-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
`, 'css')
  ])
  return section('misc', content)
}

