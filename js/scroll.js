const R = require('ramda')

const mapWithIndex = R.addIndex(R.map)

module.exports = ID$ => v => {
  const main = v.elm.querySelector('.main')  
  const sections = main.querySelectorAll('section') 
  const lastIndex = R.length(sections) - 1

  const data = mapWithIndex((elm, i) => ({
      top: elm.offsetTop
    , bottom: sections[i+1] ? sections[i+1].offsetTop : main.scrollHeight 
    , id: elm.id}), sections)

  const inRange = (scrollTop, ID$) => x => {
    if(scrollTop >= x.top && scrollTop <= x.bottom && ID$ != x.id)
    ID$(x.id)
  }

  main.addEventListener('scroll', _ => {
    let scrollTop = main.scrollTop
    R.map(inRange(scrollTop, ID$), data)
  })

  if(ID$()) {
    window.location.hash = '' 
    window.location.hash = ID$()
  }
}

