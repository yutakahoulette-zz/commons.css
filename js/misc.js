const h = require('snabbdom/h')
const code = require('./code')

module.exports = 
  h('div', [
    code(
`
.no-padding-last-child > *:last-child { padding: 0 }

.no-margin-last-child > *:last-child { margin: 0 }

.no-border-last-child > *:last-child { border: none }

.no-transform { transform: none !important }

.no-select { user-select: none }

.transition { transition: .2s ease-out }

.invisible { visibility: hidden }

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

