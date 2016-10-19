// npm
import R from 'ramda'
import h from 'snabbdom/h'
import flyd from 'flyd'
import render from 'flimflam-render'
import snabbdom from 'snabbdom'

import contents from './contents'

import anchors from './anchors'
import bgColors from './background-colors'
import blockquotes from './blockquotes'
import buttons from './buttons'
import formElements from './form-elements'
import lists from './lists'

import tables from './tables'
import tabs from './tabs'
import textColors from './text-colors'
import utils from './utils'

const init = _ => { }

const view = _ => 
  h('div.container.p2', [
    h('h1.inline-block.bg--blue.p1.mb0.mt1', 'commons.css')
  , h('hr')
  , contents()
  , h('hr')
  , bgColors()
  , h('hr')
  , blockquotes()
  , h('hr')
  , buttons()
  , h('hr')
  , formElements()
  , h('hr')
  , lists()
  , h('hr')
  , tables()
  , h('hr')
  , textColors()
  , h('hr')
  , tabs()
  , h('hr')
  , utils()
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

