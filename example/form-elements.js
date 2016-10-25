import h from 'snabbdom/h'
import header from './header'
import code from './code'

const label = text => h('strong.block.mb-1.mt-3', text)

module.exports = _ =>
  h('div', [
    header('form elements')
  , h('div', [
      h('strong.block.mb-1', 'Text input')
    , h('input.max-width-300.mb-1', {props: {type: 'text'}})
    , label('Number input with dollar prepended')
    , h('span.prepend', [
        h('span', '$')
      , h('input.width-100', {props: {type: 'number'}})
      ])
    , h('br')
    , code(
`<span class='prepend'>
  <span>$</span>
  <input type='number'> 
</span>`)
  , label('Select with caret appended')
  , h('span.append', [
      h('span', '▾')
    , h('select', [
        h('option', {props: {disabled: 'true', selected: 'true'}}, 'Select One')
      , h('option', 'Coffee')
      , h('option', 'Tea')
      ])
    ])
  , h('br')
  , code(
`<span class='append'>
  <span>▾</span>
  <select>
    <option>Coffee</option>
    <option>Tea</option>
  </select>
</span>`)
  , label('Textarea')
  , h('textarea.max-width-300.mb-1', {props: {type: 'text'}})
  , label('Radio')
  , h('input', {props: {type: 'radio', id: 'radio1', name: 'radio'}})
  , h('label', {attrs: {for: 'radio1'}}, 'Heads')
  , h('input', {props: {type: 'radio', id: 'radio2', name: 'radio'}})
  , h('label', {attrs: {for: 'radio2'}}, 'Tails')
  , code(`
<input type='radio' id='radio1' name='radio'>
<label for='radio1'>Heads</label>
<input type='radio' id='radio2' name='radio'>
<label for='radio2'>Tails</label>`)
  , label('Radio toggles')
  , h('div.toggle', [
      h('input', {props: {type: 'radio', id: 'toggle1', name: 'toggle'}})
    , h('label', {attrs: {for: 'toggle1'}}, 'Daily')
    , h('input', {props: {type: 'radio', id: 'toggle2', name: 'toggle'}})
    , h('label', {attrs: {for: 'toggle2'}}, 'Weekly')
    , h('input', {props: {type: 'radio', id: 'toggle3', name: 'toggle'}})
    , h('label', {attrs: {for: 'toggle3'}}, 'Monthly')
    ])
  , code(
`<span class='toggle'>
  <input type='radio' id='toggle1' name='toggle'>
  <label for='toggle1'>Daily</label>
  <input type='radio' id='toggle2' name='toggle'>
  <label for='toggle2'>Weekly</label>
  <input type='radio' id='toggle3' name='toggle'>
  <label for='toggle3'>Monthly</label>
</span>`)
  , label('Checkboxes')
  , h('input', {props: {type: 'checkbox', id: 'check1', name: 'check'}})
  , h('label', {attrs: {for: 'check1'}}, 'Pizza')
  , h('input', {props: {type: 'checkbox', id: 'check2', name: 'check'}})
  , h('label', {attrs: {for: 'check2'}}, 'Tacos')
  , code(
`<input type='checkbox' id='check1' name='check'>
<label for='check1'>Pizza</label>
<input type='checkbox' id='check2' name='check'>
<label for='check2'>Tacos</label>`)
  , label('Input with button')
  , h('span.table', [
      h('span.table-cell', [ h('input', {props: {type: 'search'}}) ])
    , h('button.btn--main.rounded-right.no-transform.table-cell', 'Search')
    ])
  , code(
`<span class='table'>
  <span class='table-cell'><input type='search'></span>
  <button class='btn--main rounded-right table-cell'>Search</button>
</span>`)
  ])
])
