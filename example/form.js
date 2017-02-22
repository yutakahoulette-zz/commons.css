import h from 'snabbdom/h'
import code from './code'
import title from './title'
import section from './section'
import warn from './brand-warn'

const label = text => h('strong.block.mb-1.mt-3', text)

module.exports = _ => {
  const content = h('div', [
      title('Form')
    , warn()
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
        h('span', [h('icon.material-icons', 'arrow_drop_down')])
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
    , h('br')
    , h('input', {props: {type: 'radio', id: 'radio2', name: 'radio'}})
    , h('label', {attrs: {for: 'radio2'}}, 'Tails')
    , code(
`<input type='radio' id='radio1' name='radio'>
<label for='radio1'>Heads</label>
<br>
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
    , h('br')
    , h('input', {props: {type: 'checkbox', id: 'check2', name: 'check'}})
    , h('label', {attrs: {for: 'check2'}}, 'Tacos')
    , code(
`<input type='checkbox' id='check1' name='check'>
<label for='check1'>Pizza</label>
<br>
<input type='checkbox' id='check2' name='check'>
<label for='check2'>Tacos</label>`)
    , label('Input + button')
    , h('span.table', [
        h('span.table-cell.align-middle', [ h('input', {props: {type: 'search'}}) ])
      , h('button.btn--main.rounded-right.table-cell', 'Search')
      ])
    , code(
`<span class='table'>
  <span class='table-cell'><input type='search'></span>
  <button class='btn--main rounded-right table-cell'>Search</button>
</span>`)
    , h('p', 'To modify form elements, add padding or type-scale utility classes, and elements will scale consistently:') 
    , h('span.table', [
        h('span.table-cell.align-middle', [ h('input.py-3', {props: {type: 'search'}}) ])
      , h('button.py-3.btn--main.rounded-right.table-cell', 'Search')
      ])
    , h('p.mt-1.mb-3', [h('pre.bg-grey-2.inline', '.py-3'), ' class added to input and button'])
    , h('span.table', [
        h('span.table-cell.align-middle', [ h('input.h3', {props: {type: 'search'}}) ])
      , h('button.h3.btn--main.rounded-right.table-cell', 'Search')
      ])
    , h('p.mt-1.mb-3', [h('pre.bg-grey-2.inline', '.h3'), ' class added to input and button'])
    ])
  ])
  return section('form', content)
}
