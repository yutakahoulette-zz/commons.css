const h = require('snabbdom/h')
const warn = require('./brand-warn')
const code = require('./code')

module.exports = 
  h('div', [
    h('button.disabled', 'loading...')
  , code(
`.disabled, 
*:disabled {
  pointer-events: none;
  opacity: 0.75;
}
`, 'css')
  ])

