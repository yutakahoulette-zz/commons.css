import h from 'snabbdom/h'
import hljs from 'highlight.js'

const highlight = vnode => hljs.highlightBlock(vnode.elm)

module.exports = (code, type='html') =>
  h('pre.bg-grey-1.p-2.mb-3', [h(`code.${type}`, {hook: {insert: highlight}}, code)])

