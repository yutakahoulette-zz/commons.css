const h  = require('snabbdom/h')

const snippet = (klass, text) => {
  return h('span', [
    h(`div.code.p-1.mb-2.inline-block${klass}`, text || klass)
  , h('br')
  ])
}

module.exports = 
  h('div', [
    h('div', [
      snippet('.border')
    , snippet('.border-top')
    , snippet('.border-right')
    , snippet('.border-bottom')
    , snippet('.border-left')
    , snippet('.border.border-width-1')
    , snippet('.border-top.border-width-2')
    , snippet('.border-bottom.border-width-3')
    , snippet('.border-none')
    , snippet('.bg-grey-4.pill', '.pill')
    , snippet('.bg-grey-4.rounded', '.rounded')
    , snippet('.bg-grey-4.rounded-right', '.rounded-right')
    , snippet('.bg-grey-4.rounded-top', '.rounded-top')
    , snippet('.bg-grey-4.rounded-right', '.rounded-right')
    , snippet('.bg-grey-4.rounded-bottom', '.rounded-bottom')
    , snippet('.bg-grey-4.rounded-left', '.rounded-left')
    , snippet('.bg-grey-4.not-rounded', '.not-rounded')
    , h('div.code.bg-grey-4.inline-block.center.circle.mt-0', {style: {lineHeight: '75px', width: '75px'}}, '.circle')
    ])
  ])

