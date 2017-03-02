import h from 'snabbdom/h'
import title from './title'
import section from './section'
import code from './code'

const demo = h('div.toggle-show-parent.border.p-2', [
  h('input', {props: {type: 'checkbox', id: 'toggleShow'}})
, h('label', {attrs: {for: 'toggleShow'}}, [
    h('a.btn', 'Show content')
  , h('a.btn', 'Hide content')
  ])
, h('div.toggle-show-child.h1', 'Ack!') 
])

module.exports = _ => {
  const content = h('div', [
    title('Toggle Show')
  , h('p', "This is a CSS only method for showing/hiding content by using a checkbox input's :checked state.")   
  , demo
  , code(`
<div class="toggle-show-parent">
  <input type="checkbox" id="toggleShow">
  <label for="toggleShow">
    <a class="btn">Show content</a>
    <a class="btn">Hide content</a>
  </label>
  <div class="toggle-show-child h1">Ack!</div>
</div>
`)
  , code(`
.toggle-show-parent input[type=checkbox] + label:before,
.toggle-show-parent input[type=checkbox]:checked + label *:first-of-type,
.toggle-show-parent input[type=checkbox] + label  *:last-of-type,
.toggle-show-parent input[type=checkbox] ~ .toggle-show-child { 
  display: none;
}

.toggle-show-parent input[type=checkbox] + label  *:first-of-type,
.toggle-show-parent input[type=checkbox]:checked + label  *:last-of-type,
.toggle-show-parent input[type=checkbox]:checked ~ .toggle-show-child { 
  display: block;
}`, 'css')
  ])
  return section('toggle-show', content)
}

