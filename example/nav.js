import h from 'snabbdom/h'
import R from 'ramda'
import cap from './capitalize'
import hyph from './hyphenate'

const links = [
  'about'
, 'background colors'
, 'blockquotes'
, 'buttons'
, 'form elements'
, 'help boxes'
]

const link = txt => 
  h('li', [
    h('a', {props: {href: '#' + hyph(txt)}}, cap(txt))
  ])

module.exports = _ => 
  h('div.nav.p-2', [
      h('h4.mt-1', 'commons.css')
    , h('ul.tabs-v', 
        R.map(link, links)
      )


  ])

