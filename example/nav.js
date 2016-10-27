import h from 'snabbdom/h'
import R from 'ramda'
import cap from './capitalize'
import hyph from './hyphenate'

const links = [
  'about'
, 'align'
, 'background color'
, 'blockquote'
, 'border'
, 'button'
, 'cursor'
, 'form'
, 'grid'
, 'help box'
, 'hide'
, 'layout'
, 'list'
, 'margin'
, 'misc'
, 'opacity'
, 'padding'
, 'position'
, 'progress bar'
, 'shadow'
, 'table'
, 'tabs'
, 'text color'
, 'type-scale'
, 'typography'
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

