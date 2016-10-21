import h from 'snabbdom/h'
import header from './header'
import code from './code'

module.exports = _ =>
  h('div', [
    header('Tabs', 'tabs')
  , h('div.p2.border.rounded.mb3.bg--white.inline-block', [
      h('p.bold.mt0', 'Horizontal tabs')
    , h('ul.tabs--h', [
          h('li.selected.mr1', 'Apple')
        , h('li.mr1', 'Kiwi')
        , h('li', 'Lychee')
      ])
    , code(
`<ul class='tabs--h'>
  <li class='selected'>Apple</li>
  <li>Kiwi</li>
  <li>Lychee</li>
</ul>`)
    , h('hr')
    , h('p.bold.mt0', 'Vertical tabs')
    , h('ul.tabs--v', [
          h('li.mr1', 'Apple')
        , h('li.selected.mr1', 'Kiwi')
        , h('li', 'Lychee')
      ])
    , code(
`<ul class='tabs--v'>
  <li>Apple</li>
  <li class='selected'>Kiwi</li>
  <li>Lychee</li>
</ul>`)
    ])
  ])

