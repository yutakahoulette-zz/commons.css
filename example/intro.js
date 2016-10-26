import h from 'snabbdom/h'
import section from './section'

module.exports = state => {
  const content = h('p.mt-2', [
    h('strong', 'commons.css ')
    , 'aims to be performant, and easy to use by minimizing the number of class names that you have to keep track of. We encourage the use of combining existing classes in the markup to create new UIs instead of writing additional styles. Check out the '
    , h('a', {props: {href: '#examples'}}, 'examples')
    , '.'
  ])

  return section('about', content)
}
