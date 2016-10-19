import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('Text colors', 'text-colors')
  , h('div.bg--white.border.rounded.inline-block.p2', [
      h('pre.bg--grey--5.color--white', '.color--white')
    , h('pre.color--black', '.color--black')
    , h('pre.color--grey', '.color--grey')
    , h('pre.color--blue', '.color--blue')
    , h('pre.color--red', '.color--red')
    , h('pre.color--green', '.color--green')
    ])
  ])
