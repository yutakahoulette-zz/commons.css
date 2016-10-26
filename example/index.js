// npm
import R from 'ramda'
import h from 'snabbdom/h'
import flyd from 'flyd'
import render from 'flimflam-render'
import snabbdom from 'snabbdom'
import url$ from 'flyd-url'

import intro from './intro'

import nav from './nav'

import anchors from './anchors'
import bgColors from './background-colors'
import blockquote from './blockquotes'
import buttons from './buttons'
import formElements from './form-elements'
import helpBoxes from './help-boxes'

import lists from './lists'
import progress from './progress'

import tables from './tables'
import tabs from './tabs'
import textColors from './text-colors'

window.log = (text, $) => flyd.map(x => console.log(text, x), $)

const init = _ => {
  return {
    ID$: flyd.map(x => x.hash && x.hash.replace('#', ''), url$)
  }
}

const view = state => 
  h('div.relative', [
    nav(state)
  , h('div.main.p-2', [
      intro()
    , bgColors()
    , blockquote()
    , buttons()
    , formElements()
    , helpBoxes()
    , lists()
    , progress()
    // , tables()
    // , textColors()
    // , tabs()
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

