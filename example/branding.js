import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Branding')
  , code(
`html { font-family: 'Open Sans' }

a { color: $blue }

button {
  border-color: $blue;
  color:        $blue;
}
button:disabled,
.btn--danger,
.btn--main { 
  color: white;
}
.btn--main {
  background:  $green;
  border-color: $green;
}
.btn--danger {
  background: $red;
  border-color: $red;
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

