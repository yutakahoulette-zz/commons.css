import h from 'snabbdom/h'

const title = (title, id) =>
  h('h4.p1.inline-block.bg--blue.mt0.mb2', {props: {id}}, title)

module.exports = _ =>
  h('div', [
    title('Anchors', 'anchors')
  , h('div', [
      h('a', 'Link')
    , h('pre.ml1.inline', '<a>')
    ])
  , h('div', [
      h('a.underline', 'Link')
    , h('pre.ml1.inline', "<a class='underline'>")
    ])
  , h('div', [
      h('a.hover-underline', 'Link')
    , h('pre.ml1.inline', "<a class='hover-underline'>")
    ])
  ])

