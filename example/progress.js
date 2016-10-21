import h from 'snabbdom/h'
import header from './header'
import code from './code'

module.exports = _ =>
  h('div', [
    header('Progress bar', 'progress')
  , h('div.p2.border.rounded.bg--white.inline-block', [
      h('span.progress.bg--grey--1.mb1', [ h('span', {style: {width: '80%'}}) ])
    , code( 
`<span class='progress'>
  <span style='width:80%;'></span>
</span>`)
    , h('hr')
    , h('p.italic', 'To change the height, just add a type-scale class.')
    , h('span.progress.bg--grey--1.h3.my1', [ h('span', {style: {width: '20%'}}) ])
    , code( 
`<span class='progress.h3'>
  <span style='width:20%;'></span>
</span>`)
    ])
  ])


