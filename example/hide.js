import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'

const demo = h('div.code', [
  h('div.sm-hide.p-2.border.mb-1', '.sm-hide')
, h('div.md-hide.p-2.border.mb-1', '.md-hide')
, h('div.lg-hide.p-2.border.mb-1', '.lg-hide')
, h('div.my-1.p-2.border.hover-hide-parent', [
    '.hover-hide-parent'
  , h('div.hover-show-child.border.p-2.mt-2', '.hover-show-child')
  , h('div.hover-hide-child.border.p-2.mt-2', '.hover-hide-child')
  ])
])

module.exports = _ => {
  const content = h('div', [
    title('Hide')
  , demo
  , code(`
.hide { display:none !important }

.hover-hide-child,
.hover-hide-parent:hover .hover-show-child {
  display: none;
}

.hover-show-child,
.hover-hide-parent:hover .hover-hide-child {
  display: block;
}

@media (max-width: 480px) {
  .sm-hide { display:none !important }
}

@media (min-width: 480px) and (max-width: 780px){
  .md-hide { display:none !important }
}

@media (min-width: 780px){
  .lg-hide { display:none !important }
}
`, 'css')
  ])
  return section('hide', content)
}

