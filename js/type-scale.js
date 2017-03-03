import h from 'snabbdom/h'
import title from './title'
import section from './section'
import responsiveText from './responsive-text' 

module.exports = _ => {
  const content = h('div', [
    title('Type-scale')
  , h('p.helpBox--success', responsiveText) 
  , h('p.h1.md-h2.sm-h3', '.h1.md-h2.sm-h3') 
  , h('p.h1', '<h1> or .h1 (3rem)')
  , h('p.h2', '<h2> or .h2 (2.5rem)')
  , h('p.h3', '<h3> or .h3 (2rem)')
  , h('p.h4', '<h4> or .h4 (1.5rem)')
  , h('p.h5', '<h5> or .h5 (1rem)')
  , h('p.h6', '<h6> or .h6 (.75rem)')
  , h('p.small', '<small> or .small (.75rem)')
  ])
  return section('type-scale', content)
}

