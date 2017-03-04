const R = require('ramda')

const mapWithIndex = R.addIndex(R.map)

module.exports = ID$ => v => {
  const body = document.body
  const sections = v.elm.querySelectorAll('section') 

  const inRange = (scrollTop, ID$) => x => {
    if(scrollTop >= x.top && scrollTop <= x.bottom && ID$ != x.id)
    ID$(x.id)
  }

  window.addEventListener('scroll', _ => {
    if(window.innerWidth <= 600) return 
    const scrollTop = body.scrollTop
    const data = mapWithIndex((elm, i) => ({
        top: elm.offsetTop
      , bottom: sections[i+1] ? sections[i+1].offsetTop : body.scrollHeight 
      , id: elm.id}), sections)
    R.map(inRange(scrollTop, ID$), data)
  })

  if(ID$()) {
    window.location.hash = '' 
    window.location.hash = ID$()
  }
}

