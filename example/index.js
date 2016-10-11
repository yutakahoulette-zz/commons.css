// npm
import R from 'ramda'
import h from 'snabbdom/h'
import flyd from 'flyd'
import render from 'flimflam-render'
import snabbdom from 'snabbdom'

import colors from './color-variables'
import buttons from './buttons'
import anchors from './anchors'
import tables from './tables'
import inputs from './inputs'

const init = _ => { }

const view = _ => 
  h('div.container.p2', [
    h('h1', 'CommitChange styles')
  , h('hr')
  , colors()
  , h('hr')
  , buttons()
  , h('hr')
  , anchors()
  , h('hr')
  , tables()
  , h('hr')
  , inputs()
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

