// npm
const R = require('ramda')
const h  = require('snabbdom/h')
const flyd = require('flyd')
const render = require('flimflam-render')
const snabbdom = require('snabbdom')
const url$ = require('flyd-url')

const cap = require('./js/capitalize')
const hyph = require('./js/hyphenate')
const scroll = require('./js/scroll')

const about = require('./js/about')

const title = txt => h('h3.mt-0.pt-2', cap(txt))

const section = key => 
  h('section.border-bottom.pb-5.pt-1', {props: {id: hyph(key)}}, [
    title(key)
  , dict[key]
  ])

const link = id$ => txt => 
  h('li', {class: {'is-selected': hyph(txt) === id$()}}, [
    h('a.block', {props: {href: '#' + hyph(txt)}}, cap(txt))
  ])

const nav = state => 
  h('div.nav.p-2.bg-grey-1', [
    h('ul.tabs--v', 
      R.map(link(state.id$), R.keys(dict))
    )
  ])

const dict = {
  'aspect': require('./js/aspect')
, 'align': require('./js/align')
, 'background': require('./js/background')
, 'blockquote': require('./js/blockquote')
, 'border': require('./js/border')
, 'button': require('./js/button')
, 'cursor': require('./js/cursor')
, 'disabled': require('./js/disabled')
, 'form': require('./js/form')
// const grid = require('./js/grid')
// const helpBox = require('./js/help-box')
// const hide = require('./js/hide')
// const layout = require('./js/layout')
// const list = require('./js/list')
// const opacity = require('./js/opacity')
// const margin = require('./js/margin')
// const misc = require('./js/misc')
// const padding = require('./js/padding')
// const position = require('./js/position')
// const progressBar = require('./js/progress-bar')
// const shadow = require('./js/shadow')
// const table = require('./js/table')
// const tabs = require('./js/tabs')
// const toggle = require('./js/toggle')
// const typeScale = require('./js/type-scale')
// const typography = require('./js/typography')
//
}

const init = () => ({
  id$: flyd.map(x => x.hash && x.hash.replace('#', ''), url$)
})

const imageDivider = (dir, name) =>
  h('div.clearfix', [
    h(`img.${dir}`, {props: {src: `images/${name}.png`}})
  ])

const view = state => 
  h('div.relative', {hook: {insert: scroll(state.id$)}}, [
    h('div.main', [
      h('div.max-width-800.px-3', [
        nav(state)
      , about
      , h('div.no-border-last-child', R.map(section, R.keys(dict)))
      , imageDivider('right', 'trees')
      ])
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

