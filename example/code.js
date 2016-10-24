import h from 'snabbdom/h'

module.exports = code =>
h('pre.bg-lightBlue.p-2.inline-block.mb-1', [h('code', code)])
