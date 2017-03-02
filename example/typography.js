import h from 'snabbdom/h'
import title from './title'
import section from './section'
import code from './code'

const lineHeightP = x => h(`pre.line-height-${x}.bg-grey-1`, ` .line-height-${x}`)

module.exports = _ => {
  const content = h('div', [
    title('Typography')
  , h('p.bold.mt-3', 'bold')
  , h('p.normal', 'normal')
  , h('p.italic', 'italic')
  , h('p.capitalize', 'capitalize')
  , h('p.uppercase', 'uppercase')
  , h('p.underline', 'underline')
  , h('p.hover-underline', 'hover underline')
  , h('p.strike', 'strike')
  , h('div.width-100.truncate', 'Truncateeeeeeeeeeeeeeeeee')
  , h('p.code', 'const greet = text => alert(text)')
  , code(
`<p class='bold'>bold</p>
<p class='normal'>normal</p>
<p class='italic'>italic</p>
<p class='capitalize'>capitalize</p>
<p class='uppercase'>uppercase</p>
<p class='underline'>underline</p>
<p class='strike'>strike</p>
<p class='hover-underline'>hover underline</p>
<p class='truncate width-100'>Truncateeeeeeeeeeeeeeeeee</p>
<p class='code'>const greet = text => alert(text)</p>
`)
  , code(
`.line-height-1 { line-height: 1 }
.line-height-2 { line-height: 1.2 }
.line-height-3 { line-height: 1.4 }
.line-height-4 { line-height: 1.6 }
.line-height-5 { line-height: 1.8 }
.line-height-6 { line-height: 2 }

.font-family-inherit  { font-family: inherit }
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

