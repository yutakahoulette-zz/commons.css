import h from 'snabbdom/h'
import header from './header'
import code from './code'

module.exports = _ =>
  h('div', [
    header('progress bar')
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


