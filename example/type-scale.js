import h from 'snabbdom/h'
import title from './title'
import section from './section'
import responsiveText from './responsive-text' 

module.exports = _ => {
  const content = h('div', [
    title('Type-scale')
  , h('p.helpBox--success', responsiveText) 
  , h('pre.h1', '<h1> or .h1 (3rem)')
  , h('pre.h2', '<h2> or .h2 (2.5rem)')
  , h('pre.h3', '<h3> or .h3 (2rem)')
  , h('pre.h4', '<h4> or .h4 (1.5rem)')
  , h('pre.h5', '<h5> or .h5 (1rem)')
  , h('pre.h6', '<h6> or .h6 (.75rem)')
  , h('pre.small', '<small> or .small (.75rem)')
  ])
  return section('type-scale', content)
}

