import h from 'snabbdom/h'

module.exports = (thisID, content) => {
  return h('section'
  , {props: {id: thisID}}
  , [content])
}

