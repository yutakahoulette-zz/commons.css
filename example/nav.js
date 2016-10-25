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
, 'lists'
]

const link = txt => 
  h('li', [
    h('a', {props: {href: '#' + hyph(txt)}}, cap(txt))
  ])

module.exports = _ => 
  h('div.nav.p-2', [
      h('h1.h5.mt-1.bg-lightBlue.p-1', 'commons.css')
    , h('ul.tabs--v', 
        R.map(link, links)
      )


  ])

