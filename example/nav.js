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
, 'shadows'
, 'tables'
, 'tabs'
, 'text colors'
, 'type-scale'
]

const link = ID$ => txt => 
  h('li', {class: {'is-selected': hyph(txt) === ID$()}}, [
    h('a.block', {props: {href: '#' + hyph(txt)}}, cap(txt))
  ])

module.exports = state => 
  h('div.nav.p-2.bg-grey-1', [
      h('ul.tabs--v', 
          R.map(link(state.ID$), links)
      )


  ])

