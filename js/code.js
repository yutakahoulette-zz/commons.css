const h  = require('snabbdom/h')
const hljs = require('highlight.js')

const highlight = vnode => hljs.highlightBlock(vnode.elm)

module.exports = (code, type='html') =>
  h('pre', [h(`code.${type}`, {hook: {insert: highlight}}, code.trim())])

