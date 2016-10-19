import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('Background colors', 'background-colors')
  , h('pre.mt2.p1.bg--white', '.bg--white')
  , h('pre.p1.bg--grey--1', '.bg--grey--1')
  , h('pre.p1.bg--grey--2', '.bg--grey--2')
  , h('pre.p1.bg--grey--3', '.bg--grey--3')
  , h('pre.p1.bg--grey--4', '.bg--grey--4')
  , h('pre.p1.bg--grey--5', '.bg--grey--5')
  , h('pre.p1.bg--scrim--1', '.bg--scrim--1 (transparent)')
  , h('pre.p1.bg--scrim--2.color--white', '.bg--srim--2 (transparent)')
  , h('pre.p1.bg--green', '.bg--green')
  , h('pre.p1.bg--pink', '.bg--pink')
  , h('pre.p1.bg--blue', '.bg--blue')
  , h('pre.p1.mb3.bg--yellow', '.bg--yellow')
  ])
