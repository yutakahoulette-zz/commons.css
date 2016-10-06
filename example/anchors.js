import h from 'snabbdom/h'

module.exports = _ =>
  h('div', [
    h('h1', 'Anchors')
  , h('div', [
      h('a', 'Link')
    , h('pre.ml1.inline', '<a>')
    ])
  , h('div', [
      h('a.underline', 'Link')
    , h('pre.ml1.inline', "<a class='underline'>")
    ])
  ])

