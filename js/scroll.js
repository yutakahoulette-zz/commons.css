const R = require('ramda')
const loaded = require('imagesloaded')

const mapWithIndex = R.addIndex(R.map)

module.exports = ID$ => v => {
  const body = document.body
  loaded(body, () => {
    const sections = v.elm.querySelectorAll('section') 

    const data = mapWithIndex((elm, i) => ({
        top: elm.offsetTop
      , bottom: sections[i+1] ? sections[i+1].offsetTop : body.scrollHeight 
      , id: elm.id}), sections)

    const inRange = (scrollTop, ID$) => x => {
      if(scrollTop >= x.top && scrollTop <= x.bottom && ID$ != x.id)
      ID$(x.id)
    }

    window.addEventListener('scroll', _ => {
      if(window.innerWidth <= 576) return 
      R.map(inRange(body.scrollTop, ID$), data)
    })

    if(ID$()) {
      window.location.hash = '' 
      window.location.hash = ID$()
    }
  })
}

