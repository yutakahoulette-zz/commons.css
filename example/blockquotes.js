import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('blockquotes')
  , h('blockquote', 'Mic check, mic check... one, two, three')
  ])
