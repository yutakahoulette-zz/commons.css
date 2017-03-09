const h = require('snabbdom/h')
const code = require('./code')

const lineHeightP = x => h(`pre.line-height-${x}.bg-grey-1`, ` .line-height-${x}`)

module.exports = 
  h('div', [
    h('p.bold.mt-3', 'bold')
  , h('p.normal', 'normal')
  , h('p.italic', 'italic')
  , h('p.capitalize', 'capitalize')
  , h('p.uppercase', 'uppercase')
  , h('p.underline', 'underline')
  , h('p.hover-underline', 'hover underline')
  , h('p.strike', 'strike')
  , h('div.max-width-1', [
      h('p.truncate', 'Truncateeeeeeeeeeeeeeeeeeeee')
    ])
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
<div class='max-width-1'>
  <p class='truncate'>Truncateeeeeeeeeeeeeeeeeeeee</p>
</div>
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
.break-word { word-wrap: break-word }

@media (max-width: 45em) {
  .md-align-left { text-align:left }
  .md-center { text-align:center }
  .md-align-right { text-align:right }
  .md-justify { text-align:justify }
}

@media (max-width: 30em) {
  .sm-align-left { text-align:left }
  .sm-center { text-align:center }
  .sm-align-right { text-align:right }
  .sm-justify { text-align:justify }
}
`, 'css')
  ])

