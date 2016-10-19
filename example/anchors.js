import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('Anchors', 'anchors')
  , h('div', [
      h('a', {props: {href: 'https://en.wikipedia.org/wiki/Hyperlink'}}, "Hyperlink")
    ])
  ])

