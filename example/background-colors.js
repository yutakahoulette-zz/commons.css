import h from 'snabbdom/h'

module.exports = _ =>
  h('div', [
    h('h3.mb3', 'Colors')
  , h('h5', 'Background color classes')
  , h('pre.mt2.p1.bg--grey--1', '.bg--grey--1')
  , h('pre.p1.bg--grey--2', '.bg--grey--2')
  , h('pre.p1.bg--grey--3', '.bg--grey--3')
  , h('pre.p1.bg--grey--4', '.bg--grey--4')
  , h('pre.p1.bg--grey--5', '.bg--grey--5')
  , h('pre.p1.bg--grey--6', '.bg--grey--6')
  , h('pre.p1.bg--grey--trans', '.bg--grey--trans (transparent)')
  , h('pre.p1.bg--green', '.bg--green')
  , h('pre.p1.bg--pink', '.bg--pink')
  , h('pre.p1.bg--blue', '.bg--blue')
  , h('pre.p1.mb3.bg--yellow', '.bg--yellow')
  , h('h5', 'Text color classes')
  , h('pre.color--black', '.color--black')
  , h('pre.color--grey', '.color--grey')
  , h('pre.color--blue', '.color--blue')
  , h('pre.color--red', '.color--red')
  ])
