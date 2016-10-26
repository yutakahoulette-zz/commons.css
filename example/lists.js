import h from 'snabbdom/h'
import title from './title'
import section from './section'

module.exports = _ => {
  const content = h('div', [
      title('Lists')
    , h('p.m-0.bold', 'Unordered')
    , h('ul.mb-3', [
        h('li', 'Pizza')
      , h('li', 'Porphyry')
      , h('li', 'Pyroxenite')
      , h('ul', [
          h('li', 'Burrito')
        , h('li', 'Quartz monzonite')
        , h('li', 'Phonolite')
        ])
      ])
    , h('p.bold.m-0', 'Ordered')
    , h('ol', [
          h('li', 'いち')
        , h('li', 'に')
        , h('li', 'さん')
      ])
  ])
  return section('lists', content)
}
