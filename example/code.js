import h from 'snabbdom/h'

module.exports = code =>
h('pre.bg--blue.p2.inline-block.mb0', [h('code', code)])
