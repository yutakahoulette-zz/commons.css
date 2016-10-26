import h from 'snabbdom/h'
import code from './code'
import title from './title'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Progress bar')
  , h('span.progressBar', [ h('span', {style: {width: '80%'}}) ])
  , code( 
`<span class='progressBar'>
  <span style='width:80%;'></span>
</span>`)
  , h('p.mt-3', 'To change the height, just add a type-scale class')
  , h('span.progressBar.h3', [ h('span', {style: {width: '20%'}}) ])
  , code( 
`<span class='progressBar.h3'>
  <span style='width:20%;'></span>
</span>`)
    ])
  return section('progress-bar', content)
}


