const h  = require('snabbdom/h')

module.exports =  
 h('section.pt-3.mb-5.sm-px-2', [
     h('div.table.mb-5.md-center.md-block', [
        h('img.middle-cell.md-pr-0.pr-2.md-pb-2.min-width-150.md-inline-block', {props: {src: 'images/bison.png'}})
      , h('div.middle-cell.md-block', [
          h('h1.h2.m-0', 'commons.css')
        , h('h4.mt-1.mb-0', 'v0.1.4')
        ])
      ])
    , h('p', [
        h('strong', 'commons.css ')
      , 'is comprised of utility classes heavily inspired by '
      , h('a', {props: {href: 'http://basscss.com'}}, 'Basscss')
      , ', and styles for a handful of core UI components.' 
      ])
  , h('p', {hook: {insert: x => x.elm.innerHTML = star}})
  ])

const star = `
<a class="github-button" href="https://github.com/yutakahoulette/commons.css" aria-label="Star yutakahoulette/commons.css on GitHub">Star</a>
`

const twit = `
<a href="https://twitter.com/share" class="twitter-share-button" data-show-count="false">Tweet</a>`

