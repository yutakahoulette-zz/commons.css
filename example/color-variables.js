import h from 'snabbdom/h'

module.exports = _ =>
  h('div', [
    h('h2', 'Backgrounds')
  , h('div.clearfix', [
      h('pre.col.p1.col-3.bg--grey--1', '.bg--grey--1')
    , h('pre.col.p1.col-3.bg--grey--2', '.bg--grey--2')
    , h('pre.col.p1.col-3.bg--grey--3', '.bg--grey--3')
    , h('pre.col.p1.col-3.bg--grey--4', '.bg--grey--4')
    ])
  , h('div.clearfix', [
      h('pre.col.p1.col-3.bg--green', '.bg--green')
    , h('pre.col.p1.col-3.bg--pink', '.bg--pink')
    , h('pre.col.p1.col-3.bg--blue', '.bg--blue')
    , h('pre.col.p1.col-3.bg--yellow', '.bg--yellow')
    ])
  ])
