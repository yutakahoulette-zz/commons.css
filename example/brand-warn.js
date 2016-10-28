import h from 'snabbdom/h'

module.exports = _ => h('div.helpBox--warn.mb-3', [
    'Some of these elements have '
  , h('a', {props: {href: '#branding'}}, 'branding styles ')
  , 'added for demonstration purposes.'])

