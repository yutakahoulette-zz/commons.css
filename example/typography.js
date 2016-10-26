import h from 'snabbdom/h'
import title from './title'
import section from './section'
import code from './code'

module.exports = _ => {
  const content = h('div', [
    title('Typography')
  , h('p.bold.mt-3', 'bold')
  , h('p.italic', 'italic')
  , h('p.caps', 'caps')
  , h('p.underline', 'underline')
  , h('p.hover-underline', 'hover underline')
  , h('div.width-100.truncate', 'Helloooooooooooooooooo')
  , h('p.line-height-1.bg-grey-1', 'line-height 1')
  , h('p.line-height-2.bg-grey-1', 'line-height 2')
  , h('p.line-height-3.bg-grey-1', 'line-height 3')
  , h('p.line-height-4.bg-grey-1', 'line-height 4')
  , h('p.line-height-5.bg-grey-1', 'line-height 5')
  , h('p.line-height-6.bg-grey-1', 'line-height 6')
  , code(
`<p class='bold'>bold</p>
<p class='italic'>italic</p>
<p class='caps'>caps</p>
<p class='underline'>underlin</p>
<p class='hover-underline'>hover-underline</p>
<p class='width-100 truncate'>Helloooooooooooooooooo</p>
<p class='line-height-1.bg-grey-1'>line-height 1</p>
<p class='line-height-2.bg-grey-1'>line-height 2</p>
<p class='line-height-3.bg-grey-1'>line-height 3</p>
<p class='line-height-4.bg-grey-1'>line-height 4</p>
<p class='line-height-5.bg-grey-1'>line-height 5</p>
<p class='line-height-6.bg-grey-1'>line-height 6</p>
`)
  , code(
`.font-family-inherit  { font-family: inherit }
.font-size-inherit    { font-size: inherit }

.text-decoration-none { text-decoration: none }

.align-left  { text-align: left }
.center      { text-align: center }
.align-right { text-align: right }
.justify     { text-align: justify }

.nowrap { white-space: nowrap }
.break-word { word-wrap: break-word }`, 'css')
  ])
  return section('typography', content)
}

