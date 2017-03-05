// npm
const R = require('ramda')
const h  = require('snabbdom/h')
const flyd = require('flyd')
const render = require('flimflam-render')
const snabbdom = require('snabbdom')
const url$ = require('flyd-url')

// local
const cap = require('./js/capitalize')
const hyph = require('./js/hyphenate')
const scroll = require('./js/scroll')
const about = require('./js/about')

const map = R.addIndex(R.map)

const title = txt => h('h3.mt-0.mb-3', cap(txt))

const images = [
  ''
, 'fake-moon'
, 'smoke'
, 'fake-palms'
, 'rings'
, 'moths'
, 'stream'
, 'bear-butt'
, 'twister'
, 'trees'
]

const image = (dir, name) =>
  h('div.clearfix.pt-5.sm-px-2.sm-pt-3', [
    h(`img.${dir}`, {props: {src: `images/${name}.png`}})
  ])

const section = (key, i) => {
  i+=1
  const addImage = i % 3 === 0
  const dir = (i % 2 === 0) ? 'left' : 'right'
  return h('section.mb-5.sm-mb-3', {props: {id: hyph(key)}}, [
    h('div.bg-white.sh-1.p-2', [
      title(key)
    , dict[key]
    ])
  , addImage  
    ? image(dir, images[i / 3])
    : ''
  ])
}

const link = id$ => txt => 
  h('li', {class: {'is-selected': hyph(txt) === id$()}}, [
    h('a.block', {props: {href: '#' + hyph(txt)}}, cap(txt))
  ])

const nav = state => 
  h('div.nav.sh-1.p-2.bg-white.sm-hide', [
    h('ul.tabs--v', 
      R.map(link(state.id$), R.keys(dict))
    )
  ])

const start = h('div', [
    h('p.bold.m-0', 'CDN')
  , h('pre', `<link href="https://unpkg.com/commons.css@0.1.2/lib/index.min.css" rel="stylesheet">`)
  , h('p.bold.m-0', 'NPM')
  , h('pre', 'npm install commons.css')
  , h('p.bold.m-0', 'Github')
  , h('pre', [ h('a', {props: {href: 'https://github.com/yutakahoulette/commons.css'}}, 'github.com/yutakahoulette/commons.css')])
])

const dict = {
  start
, 'aspect': require('./js/aspect')
, 'align': require('./js/align')
, 'background': require('./js/background')
, 'blockquote': require('./js/blockquote')
, 'border': require('./js/border')
, 'button': require('./js/button')
, 'cursor': require('./js/cursor')
, 'disabled': require('./js/disabled')
, 'form': require('./js/form')
, 'grid': require('./js/grid')
, 'help box' : require('./js/help-box')
, 'hide' : require('./js/hide')
, 'layout' : require('./js/layout')
, 'list' : require('./js/list')
, 'opacity' : require('./js/opacity')
, 'margin' : require('./js/margin')
, 'misc' : require('./js/misc')
, 'padding' : require('./js/padding')
, 'position' : require('./js/position')
, 'progress bar' : require('./js/progress-bar')
, 'shadow' : require('./js/shadow')
, 'table' : require('./js/table')
, 'tabs' : require('./js/tabs')
, 'toggle' : require('./js/toggle')
, 'type-scale' : require('./js/type-scale')
, 'typography' : require('./js/typography')
}

const init = () => ({
  id$: flyd.map(x => x.hash && x.hash.replace('#', ''), url$)
})

const view = state => 
  h('div.bg-grey-2', {hook: {insert: scroll(state.id$)}}, [
    nav(state)
  , h('main.sm-p-0', [
      h('div.max-width-4.px-3.sm-p-0', [
        about
      , h('div', map(section, R.keys(dict)))
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

