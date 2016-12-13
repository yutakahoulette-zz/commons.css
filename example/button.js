import h from 'snabbdom/h'
import title from './title'
import section from './section'
import warn from './brand-warn'
import code from './code'

module.exports = _ => {
  const content = h('div', [
    title('Button')
  , warn()
  , h('p.mb-3', 'If you would like to apply a button style to a non-button element (an anchor tag, for example), you can add the .btn class')
  , h('div.col-6.inline-block.mb-1', [
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
  , h('p.my-3', 'To create a connected group of buttons, wrap your buttons or .btn classes in an element with the .buttons class')
  , h('div.buttons', [
      h('button', 'Guitar')
    , h('button', 'Bass')
    , h('button', 'Gong')
    , h('button', 'Tuba')
    ])
  , code(
`<div class='buttons'>
  <button>Guitar</button>
  <button>Bass</button>
  <button>Gong</button>
  <button>Tuba</button>
</div>`)
  ])
  return section('button', content)
}

