import h from 'snabbdom/h'

module.exports = (text, id) =>
  h('h3.w--full.inline-block.mb2.mt4', {props: {id}}, text)

