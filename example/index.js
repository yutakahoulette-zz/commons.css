// npm
import R from 'ramda'
import h from 'snabbdom/h'
import flyd from 'flyd'
import render from 'flimflam-render'
import snabbdom from 'snabbdom'
import url$ from 'flyd-url'

import nav from './nav'

import about from './about'
import align from './align'
import bgColor from './background-color'
import blockquote from './blockquote'
import border from './border'
import button from './button'
import cursor from './cursor'
import form from './form'
import grid from './grid'
import helpBox from './help-box'
import hide from './hide'
import layout from './layout'
import list from './list'
import opacity from './opacity'
import margin from './margin'
import misc from './misc'
import padding from './padding'
import position from './position'
import progressBar from './progress-bar'
import shadow from './shadow'
import table from './table'
import tabs from './tabs'
import textColor from './text-color'
import typeScale from './type-scale'
import typography from './typography'

window.log = (text, $) => flyd.map(x => console.log(text, x), $)

const init = _ => {
  return {
    ID$: flyd.map(x => x.hash && x.hash.replace('#', ''), url$)
  }
}

const scroll = ID$ => v => {
  const main = v.elm.querySelector('.main')  
  const sectionsData = R.map(x => ({top: x.offsetTop, id: x.id}), main.querySelectorAll('section'))

  main.addEventListener('scroll', _ => {
    R.map(a => {
      let scrollTop = main.scrollTop
      let distance = scrollTop - a.top
      if(distance < 20 && distance > -20 && ID$ != a.id) {
        window.location.hash = a.id
      }
    }, sectionsData)
  })

  // to handle anchor scrolling on page load
  if(ID$()) {
    window.location.hash = '' 
    window.location.hash = ID$()
  }
}


const view = state => 
  h('div.relative', {hook: {insert: scroll(state.ID$)}}, [
    nav(state)
  , h('div.main.px-3', [
      about()
    , align()
    , bgColor()
    , blockquote()
    , border()
    , button()
    , cursor()
    , form()
    , grid()
    , helpBox()
    , hide()
    , layout()
    , list()
    , margin()
    , misc()
    , opacity()
    , padding()
    , position()
    , progressBar()
    , shadow()
    , table()
    , tabs()
    , textColor()
    , typeScale()
    , typography()
    ])
  ])

let container = document.querySelector('#container')

const patch = snabbdom.init([
  require('snabbdom/modules/class')
, require('snabbdom/modules/props')
, require('snabbdom/modules/style')
, require('snabbdom/modules/eventlisteners')
, require('snabbdom/modules/attributes')
])

render({patch, container, view, state: init()})

