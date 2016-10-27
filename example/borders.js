import h from 'snabbdom/h'
import title from './title'
import section from './section'

const snippet = (klass, text) => {
  return h('span', [
    h(`pre.p-1.inline-block.mt-0${klass}`, text || klass)
  , h('br')
  ])
}

module.exports = _ => {
  const content = h('div', [
    title('Borders')
  , h('div', [
      snippet('.border')
    , snippet('.border-top')
    , snippet('.border-right')
    , snippet('.border-bottom')
    , snippet('.border-left')
    , snippet('.border-none')
    , snippet('.border.border-color-red')
    , snippet('.border.border-color-green')
    , snippet('.bg-grey-4.pill', '.pill (.5em)')
    , snippet('.bg-grey-4.rounded', '.rounded (5px)')
    , snippet('.bg-grey-4.rounded-right', '.rounded-right')
    , snippet('.bg-grey-4.rounded-top', '.rounded-top')
    , snippet('.bg-grey-4.rounded-right', '.rounded-right')
    , snippet('.bg-grey-4.rounded-bottom', '.rounded-bottom')
    , snippet('.bg-grey-4.rounded-left', '.rounded-left')
    , snippet('.bg-grey-4.not-rounded', '.not-rounded')
    , h('pre.bg-grey-4.inline-block.center.circle.mt-0', {style: {lineHeight: '75px', width: '75px'}}, '.circle')
    ])
  ])
  return section('borders', content)
}

