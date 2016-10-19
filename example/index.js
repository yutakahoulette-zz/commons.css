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
import progress from './progress'

import tables from './tables'
import tabs from './tabs'
import textColors from './text-colors'

const init = _ => { }

const view = _ => 
  h('div.container.p2', [
    h('h1.inline-block.bg--blue.p1.mb0.mt1', 'commons.css')
  , h('hr')
  , contents()
  , bgColors()
  , blockquotes()
  , buttons()
  , formElements()
  , lists()
  , tables()
  , textColors()
  , tabs()
  , progress()
  , h('div.max-width-2', [
      h('div.mb2.helpBox--green', [h('pre.m0', '.helpBox--green')])
    , h('div.mb2.helpBox--yellow', [h('pre.m0', '.helpBox--yellow')])
    , h('div.mb2.helpBox--red', [h('pre.m0', '.helpBox--red')])
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

