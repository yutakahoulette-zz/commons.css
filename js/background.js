const h  = require('snabbdom/h')
const code = require('./code')

module.exports = 
  h('div', [
    code(
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

