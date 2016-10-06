import h from 'snabbdom/h'

module.exports = _ =>
  h('div', [
    h('h1', 'Tables')
  , h('table', [
      h('tr', [
        h('th', 'Name')
      , h('th', 'Year')
      , h('th', 'Length')
      ])
    , h('tr', [
        h('td', 'Kraftwerk')
      , h('td', '1970')
      , h('td', '39:39')
      ])
    , h('tr', [
        h('td', 'Kraftwerk 2')
      , h('td', '1972')
      , h('td', '42:42')
      ])
    , h('tr', [
        h('td', 'Ralf and Florian')
      , h('td', '1973')
      , h('td', '37:41')
      ])
    ])
  ])
