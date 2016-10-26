import h from 'snabbdom/h'

module.exports = (thisID, content) => {
  return h('section.border-bottom.pb-5'
  , {props: {id: thisID}}
  , [content])
}

