const h = require('snabbdom/h')
const code = require('./code')

module.exports = 
  h('div', [
    code(
`.opacity-0   { opacity: 0 }
.opacity-025 { opacity: .25 }
.opacity-05  { opacity: .5 }
.opacity-075 { opacity: .75 }
.opacity-1   { opacity: 1 }`, 'css')
  ])

