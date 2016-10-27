import h from 'snabbdom/h'

module.exports = state => 
 h('div.pt-3.pb-4.border-bottom', {props: {id: 'about'}}, [
      h('h1.mt-0.mb-4.bg-lightBlue.p-3', 'commons.css')
    , h('p', [
        h('strong', 'commons.css ')
      , 'aims to be performant, and easy to use by minimizing the number of class names that you have to keep track of. We encourage the use of combining existing classes in the markup to create new UIs instead of writing additional styles. Check out the '
      , h('a', {props: {href: '#examples'}}, 'examples')
      , '.'
    ])
  ])

