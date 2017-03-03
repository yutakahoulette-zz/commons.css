const h  = require('snabbdom/h')

module.exports =  
 h('section.pt-3.pb-4.border-bottom', [
     h('div.table.sm-block.mb-5.sm-center', [
        h('img.middle-cell.sm-pr-0.pr-2.sm-pb-2.min-width-150.sm-inline-block', {props: {src: 'images/bison.png'}})
      , h('div.middle-cell.sm-inline-block', [
          h('h1.h2.m-0', 'commons.css')
        , h('h4.mt-1.mb-0', 'v0.1.2')
        ])
      ])
    , h('p', [
        h('strong', 'commons.css ')
      , 'is comprised of utility classes heavily inspired by '
      , h('a', {props: {href: 'http://basscss.com'}}, 'Basscss')
      , ', and styles for a handful of core UI components.' 
      ])
  , h('h4.mt-5', 'Getting started')
  , h('p.bold', 'CDN')
  , h('pre.bg-grey-1.p-1', `<link href="https://unpkg.com/commons.css@0.1.2/lib/index.min.css" rel="stylesheet">`)
  , h('p.bold', 'NPM')
  , h('pre.bg-grey-1.p-1.mt-2', 'npm install commons.css')
  , h('p.bold', 'Github')
  , h('p.mt-0', [ h('a', {props: {href: 'https://github.com/yutakahoulette/commons.css'}}, 'github.com/yutakahoulette/commons.css')])
  , h('div.table.mt-3', [
      h('span.middle-cell.pr-1', {hook: {insert: x => x.elm.innerHTML = star}})
    , h('span.middle-cell', {hook: {insert: x => x.elm.innerHTML = twit}})
    ])
  ])

const star = `
<a class="github-button" href="https://github.com/yutakahoulette/commons.css" aria-label="Star yutakahoulette/commons.css on GitHub">Star</a>
`

const twit = `
<a href="https://twitter.com/share" class="twitter-share-button" data-show-count="false">Tweet</a>`

