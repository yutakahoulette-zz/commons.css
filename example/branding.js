import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Branding')
  , h('div.helpBox--error.mb-3', 'These branding styles are not included in commons.css. They are added just to this page for reference and demonstration purposes.') 
  , code(
`html { font-family: 'Open Sans' }

a { color: $blue }

.btn,
button {
  border-color: $blue;
  color:        $blue;
}
.btn:active,
button:active {
  background: $grey-1;
}
.btn--main {
  background:  $green;
  border-color: $green;
  color: white;
}
.btn--main:active {
  background: $green-dark;
  border-color: $green-dark;
}

textarea:focus,
select:focus,
input:focus { 
  border-color: $green;
}
input[type='checkbox'] + label:hover:before,
input[type='radio'] + label:hover:before { 
  background: $green-light;
}
input[type='checkbox']:checked + label:before,
input[type='radio']:checked + label:before { 
  background: $green;
} 
input[type='checkbox'] + label:before { 
  content: '\\2713';
}
input[type='radio'] + label:before { 
  content: '\\2022'; 
}
.toggle input[type='radio'] + label:hover { 
  background: $green-light; 
}
.toggle input[type='radio']:checked + label { 
  background: $green;
}

.helpBox--success {
  background: $green-light;
  border-color: $green;
}
.helpBox--warn {
  background: $yellow-light;
  border-color: $yellow;
}
.helpBox--error {
  background: $red-light;
  border-color: $red;
}

.progressBar > span { background: $green }

.tabs--h li.is-selected { border-bottom-color: $green }
.tabs--v li.is-selected { border-left-color: $green }`, 'css')
  ])
  return section('branding', content)
}

