import h from 'snabbdom/h'
import title from './title'
import section from './section'

const snippet = (klass, text) => {
  return h('span', [
    h(`div.p-1.mb-2.inline-block${klass}`, text || klass)
  , h('br')
  ])
}

module.exports = _ => {
  const content = h('div', [
    title('Border')
  , h('div', [
      snippet('.border')
    , snippet('.border-top')
    , snippet('.border-right')
    , snippet('.border-bottom')
    , snippet('.border-left')
    , snippet('.border-none')
    , snippet('.bg-grey-4.pill', '.pill (1em)')
    , snippet('.bg-grey-4.rounded', '.rounded (3px)')
    , snippet('.bg-grey-4.rounded-right', '.rounded-right')
    , snippet('.bg-grey-4.rounded-top', '.rounded-top')
    , snippet('.bg-grey-4.rounded-right', '.rounded-right')
    , snippet('.bg-grey-4.rounded-bottom', '.rounded-bottom')
    , snippet('.bg-grey-4.rounded-left', '.rounded-left')
    , snippet('.bg-grey-4.not-rounded', '.not-rounded')
    , h('pre.bg-grey-4.inline-block.center.circle.mt-0', {style: {lineHeight: '75px', width: '75px'}}, '.circle')
    ])
  ])
  return section('border', content)
}

