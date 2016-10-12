// npm
import R from 'ramda'
import h from 'snabbdom/h'
import flyd from 'flyd'
import render from 'flimflam-render'
import snabbdom from 'snabbdom'

import contents from './contents'
import bgColors from './background-colors'
import buttons from './buttons'
import anchors from './anchors'
import tables from './tables'
import inputs from './inputs'
import lists from './lists'

const init = _ => { }

const view = _ => 
  h('div.container.p2', [
    h('h1.inline-block.bg--blue.p1.mb0', 'commons.css')
  , h('hr')
  , contents()
  , h('hr')
  , anchors()
  , h('hr')
  , bgColors()
  , buttons()
  , h('hr')
  , h('hr')
  , tables()
  , h('hr')
  , inputs()
  , h('hr')
  , lists()
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

