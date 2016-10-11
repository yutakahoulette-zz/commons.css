import h from 'snabbdom/h'

module.exports = _ =>
  h('div', [
    h('h2', 'Background colors')
  , h('div.clearfix', [
      h('pre.col.p1.col-2.bg--grey--1', '.bg--grey--1')
    , h('pre.col.p1.col-2.bg--grey--2', '.bg--grey--2')
    , h('pre.col.p1.col-2.bg--grey--3', '.bg--grey--3')
    , h('pre.col.p1.col-2.bg--grey--4', '.bg--grey--4')
    , h('pre.col.p1.col-2.bg--grey--5', '.bg--grey--5')
    , h('pre.col.p1.col-2.bg--grey--6', '.bg--grey--6')
    ])
  , h('div.clearfix', [
      h('pre.col.p1.col-3.bg--green', '.bg--green')
    , h('pre.col.p1.col-3.bg--pink', '.bg--pink')
    , h('pre.col.p1.col-3.bg--blue', '.bg--blue')
    , h('pre.col.p1.col-3.bg--yellow', '.bg--yellow')
    ])
  , h('hr')
  , h('h2', 'Text colors')
  , h('div.clearfix', [
      h('pre.col.p1.col-3.color--black', '.color--black')
    , h('pre.col.p1.col-3.color--grey', '.color--grey')
    , h('pre.col.p1.col-3.color--blue', '.color--blue')
    , h('pre.col.p1.col-3.color--red', '.color--red')
    ])
  ])
