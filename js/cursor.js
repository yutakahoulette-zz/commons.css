const code = require('./code')

module.exports = 
  code(
`
.cursor-pointer     { cursor: pointer }
.cursor-not-allowed { cursor: not-allowed }
.cursor-default { cursor: default }
.cursor-initial     { cursor: initial }
`, 'css')

