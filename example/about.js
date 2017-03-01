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
  , h('pre.bg-grey-1.inline-block.p-1.mt-2', 'npm install commons.css')
  ])

