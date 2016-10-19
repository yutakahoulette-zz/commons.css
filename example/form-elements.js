import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>
  h('div', [
    header('Form Elements', 'form-elements')
  , h('div', [
      h('div.mb2.p2.bg--grey--2.w--300', [
        h('label.block.mb1', 'Text input')
      , h('input', {props: {type: 'text'}})
      ])
    , h('div.table.bg--grey--2.p2.mb2', [
        h('span.table-cell.align-middle.pr4', [
          h('label.block.mb1', 'Number input with dollar prepended')
        , h('span.prepend', [
            h('span', '$')
          , h('input', {props: {type: 'number'}})
          ])
        ])
      , h('span.table-cell.align-middle', [
          h('pre', "<span class='prepend'> \n" +    
          "  <span>$</span> \n" +
          "  <input type='number'> \n" +
          "</span>")
      ])
    ])
  , h('div.table.bg--grey--2.p2.mb2', [
      h('span.table-cell.align-middle.pr4', [
        h('label.block.mb1', 'Select with caret appended')
      , h('span.append', [
          h('span', '▾')
        , h('select', [
            h('option', {props: {disabled: 'true', selected: 'true'}}, 'Select One')
          , h('option', 'Coffee')
          , h('option', 'Tea')
          ])
        ])
      ])
    , h('span.table-cell.align-middle', [
        h('pre', "<span class='append'> \n" +
        "  <span>▾</span> \n" +
        "  <select> \n" +
        "    <option>Coffee</option> \n" +
        "    <option>Tea</option> \n" +
        "  </select>\n" +
        "</span>")
      ])
    ])
    , h('div.mb2.p2.bg--grey--2.w--300', [
        h('label.block.mb1', 'Textarea')
      , h('textarea', {props: {type: 'text'}})
      ])
    , h('div.table.bg--grey--2.p2.mb2', [
        h('span.table-cell.align-middle.pr4', [
          h('label.block.mb1', 'Radio')
        , h('input', {props: {type: 'radio', id: 'radio1', name: 'radio'}})
        , h('label', {attrs: {for: 'radio1'}}, 'Heads')
        , h('input', {props: {type: 'radio', id: 'radio2', name: 'radio'}})
        , h('label', {attrs: {for: 'radio2'}}, 'Tails')
      ])
    , h('span.table-cell.align-middle', [
        h('pre', "<input type='radio' id='radio1' name='radio'>\n" +
        "<label for='radio1'>Heads</label>\n" +
        "<input type='radio' id='radio2' name='radio'>\n" +
        "<label for='radio2'>Tails</label>"
        )
        ])
      ])
    , h('div.table.bg--grey--2.p2.mb2', [
        h('span.table-cell.align-middle.pr4', [
          h('label.block.mb1', 'Radio toggles')
        , h('div.toggle', [
            h('input', {props: {type: 'radio', id: 'toggle1', name: 'toggle'}})
          , h('label', {attrs: {for: 'toggle1'}}, 'Daily')
          , h('input', {props: {type: 'radio', id: 'toggle2', name: 'toggle'}})
          , h('label', {attrs: {for: 'toggle2'}}, 'Weekly')
          , h('input', {props: {type: 'radio', id: 'toggle3', name: 'toggle'}})
          , h('label', {attrs: {for: 'toggle3'}}, 'Monthly')
          ])
        ])
      , h('span.table-cell.align-middle', [
          h('pre', "<span class='toggle'>\n" +
          "  <input type='radio' id='toggle1' name='toggle'>\n" +
          "  <label for='toggle1'>Daily</label>\n" +
          "  <input type='radio' id='toggle2' name='toggle'>\n" +
          "  <label for='toggle2'>Weekly</label>\n" +
          "  <input type='radio' id='toggle3' name='toggle'>\n" +
          "  <label for='toggle3'>Monthly</label>\n" +
          "</span>")
        ])
      ])
    , h('div.table.bg--grey--2.p2.mb2', [
        h('span.table-cell.align-middle.pr4', [
          h('label.block.mb1', 'Checkboxes')
        , h('input', {props: {type: 'checkbox', id: 'check1', name: 'check'}})
        , h('label', {attrs: {for: 'check1'}}, 'Pizza')
        , h('input', {props: {type: 'checkbox', id: 'check2', name: 'check'}})
        , h('label', {attrs: {for: 'check2'}}, 'Tacos')
        ])
      , h('span.table-cell.align-middle', [
          h('pre', "<input type='checkbox' id='check1' name='check'>\n" +
          "<label for='check1'>Pizza</label>\n" +
          "<input type='checkbox' id='check2' name='check'>\n" +
          "<label for='check2'>Tacos</label>"
          )
          ])
      ])
    , h('div.bg--grey--2.p2.inline-block.mb2', [
        h('label.block.mb1', 'Input with button')
      , h('span.table', [
          h('span.table-cell', [ h('input', {props: {type: 'search'}}) ])
        , h('button.btn--main.rounded-right.no-transform.table-cell', 'Search')
        ])
      ])
    ])
  ])
