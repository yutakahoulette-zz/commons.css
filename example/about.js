import h from 'snabbdom/h'

module.exports = state => 
 h('section.pt-3.pb-4.border-bottom', {props: {id: 'about'}}, [
      h('h1.mt-0.mb-4', 'commons.css')
    , h('p', [
        h('strong', 'commons.css ')
      , 'is comprised of utility classes heavily inspired by '
      , h('a', {props: {href: 'http://basscss.com'}}, 'Basscss')
      , ', and styles for a handful of core UI components.' 
      ])
  , h('p.code.bg-grey-1.inline-block.p-1.mt-2', 'npm install commons.css')
  , h('p', [ h('a', {props: {href: 'https://github.com/yutakahoulette/commons.css'}}, 'View on Github.')])
  , h('p.mt-3', {hook: {insert: x => x.elm.innerHTML = star}})
  ])

const star = `
<a class="github-button" href="https://github.com/yutakahoulette/commons.css" aria-label="Star yutakahoulette/commons.css on GitHub">Star</a>
`
