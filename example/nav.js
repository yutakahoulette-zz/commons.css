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
, 'progress bar'
]

const link = ID$ => txt => 
  h('li', {class: {'is-selected': hyph(txt) === ID$()}}, [
    h('a', {props: {href: '#' + hyph(txt)}}, cap(txt))
  ])

module.exports = state => 
  h('div.nav.p-2', [
      h('h1.h5.mt-1.bg-lightBlue.p-1', 'commons.css')
    , h('ul.tabs--v', 
        R.map(link(state.ID$), links)
      )


  ])

