import h from 'snabbdom/h'

module.exports = (text, id) =>
  h('h3.w--full.inline-block.mb2.mt0', {props: {id}}, text)

