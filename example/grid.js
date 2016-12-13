import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'
import responsiveText from './responsive-text' 


module.exports = _ => {
  const content = h('div', [
    title('Grid')
  , h('p.helpBox--success', responsiveText) 
  , code(
`.col       { float: left }
.col-right { float: right }
.col-1  { width: 8.33333% }
.col-2  { width: 16.66667% }
.col-3  { width: 25% }
.col-4  { width: 33.33333% }
.col-5  { width: 41.66667% }
.col-6  { width: 50% }
.col-7  { width: 58.33333% }
.col-8  { width: 66.66667% }
.col-9  { width: 75% }
.col-10 { width: 83.33333% }
.col-11 { width: 91.66667% }
.col-12 { width: 100% }`, 'css')
  ])
  return section('grid', content)
}

