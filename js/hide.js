const h = require('snabbdom/h')
const code = require('./code')

const demo = h('div.code', [
  h('div.sm-hide.p-2.border.mb-2', '.sm-hide')
, h('div.md-hide.p-2.border.mb-2', '.md-hide')
, h('div.lg-hide.p-2.border.mb-2', '.lg-hide')
, h('div.mb-2.p-2.border.hover-hide-parent', [
    '.hover-hide-parent'
  , h('div.hover-show-child.border.p-2.mt-2', '.hover-show-child')
  , h('div.hover-hide-child.border.p-2.mt-2', '.hover-hide-child')
  ])
])

module.exports = 
  h('div', [
    demo
  , code(`
.hide { display:none !important }

.hover-hide-child,
.hover-hide-parent:hover .hover-show-child {
  opacity: 0;
  visibility: hidden;
}

.hover-show-child,
.hover-hide-parent:hover .hover-hide-child {
  opacity: 1;
  visibility: visible;
}

@media (max-width: 30em) {
  .sm-hide { display:none !important }
}

@media (min-width: 30em) and (max-width: 45em){
  .md-hide { display:none !important }
}

@media (min-width: 45em){
  .lg-hide { display:none !important }
}
`, 'css')
  ])

