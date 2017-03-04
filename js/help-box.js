const h = require('snabbdom/h')
const warn = require('./brand-warn')
const code = require('./code')

module.exports = 
  h('div', [
    warn
  , h('div', [
      h('div.mb-2.helpBox--success.code', '.helpBox--success')
    , h('div.mb-2.helpBox--warn.code', '.helpBox--warn')
    , h('div.helpBox--error.code', '.helpBox--error')
    ])
  ])

