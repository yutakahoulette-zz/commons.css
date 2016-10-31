import h from 'snabbdom/h'
import title from './title'
import section from './section'
import warn from './brand-warn'

module.exports = _ => {
  const content = h('div', [
    title('Button')
  , warn()
  , h('div', [
      h('div.col-6.inline-block.mb-1', [
        h('button', 'Learn more')
      , h('pre', 'default')
      ])
    , h('div.col-6.inline-block.mb-1', [
        h('button', {props: {disabled : true}}, 'Loading...')
      , h('pre', 'disabled')
      ])
    , h('p.mb-3', [
        'Instead of creating additional BEM style classes for buttons, such as '
      , h('pre.inline.bg-grey-2', '.btn--large') 
      , ', you can combine utility classes such type-scale, line-height, border and padding, to creating button variations.' 
      ])
    , h('div.col-6.inline-block.mb-1', [
        h('button.h4.caps', 'Large caps')
      , h('pre', 'button.h4.caps')
      ])
    , h('div.col-6.inline-block.mb-1', [
        h('button.p-2.bold', 'Bold and padded')
      , h('pre', 'button.p-2.bold')
      ])
    , h('div.col-6.inline-block.mb-1', [
        h('button.pill.line-height-1', 'Pill shaped')
      , h('pre', 'button.pill.line-height-1')
      ])
    , h('div.col-6.inline-block.mb-1', [
        h('button.not-rounded.sh-2', 'Shadow')
      , h('pre', 'button.not-rounded.sh-1')
      ])
    ])
  ])
  return section('button', content)
}

