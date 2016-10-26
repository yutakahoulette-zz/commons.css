import h from 'snabbdom/h'
import title from './title'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Tables')
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
  return section('tables', content)
}
