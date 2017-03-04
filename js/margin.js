const h = require('snabbdom/h')
const code = require('./code')
const responsiveText = require('./responsive-text')

const demo = 
  h('div.code.p-2.border.mb-3.md-mb-2.sm-mb-1', '.mb-3.md-mb-2.sm-mb-1')

module.exports =
  h('div', [
    demo
  , h('p.helpBox--success', responsiveText) 
  , code(
`.m-0  { margin: 0 }
.mt-0 { margin-top: 0 }
.mr-0 { margin-right: 0 }
.mb-0 { margin-bottom: 0 }
.ml-0 { margin-left: 0 }
.mx-0 { margin-left: 0; margin-right: 0 }
.my-0 { margin-top: 0; margin-bottom: 0 }

.m-1  { margin: .5rem }
.mt-1 { margin-top: .5rem }
.mr-1 { margin-right: .5rem }
.mb-1 { margin-bottom: .5rem }
.ml-1 { margin-left: .5rem }
.mx-1 { margin-left: .5rem; margin-right: .5rem }
.my-1 { margin-top: .5rem; margin-bottom: .5rem }

.m-2  { margin: 1rem }
.mt-2 { margin-top: 1rem }
.mr-2 { margin-right: 1rem }
.mb-2 { margin-bottom: 1rem }
.ml-2 { margin-left: 1rem }
.mx-2 { margin-left: 1rem; margin-right: 1rem }
.my-2 { margin-top: 1rem; margin-bottom: 1rem }

.m-3  { margin: 2rem }
.mt-3 { margin-top: 2rem }
.mr-3 { margin-right: 2rem }
.mb-3 { margin-bottom: 2rem }
.ml-3 { margin-left: 2rem }
.mx-3 { margin-left: 2rem; margin-right: 2rem }
.my-3 { margin-top: 2rem; margin-bottom: 2rem }

.m-4  { margin: 3rem }
.mt-4 { margin-top: 3rem }
.mr-4 { margin-right: 3rem }
.mb-4 { margin-bottom: 3rem }
.ml-4 { margin-left: 3rem }
.mx-4 { margin-left: 3rem; margin-right: 3rem }
.my-4 { margin-top: 3rem; margin-bottom: 3rem }

.m-5  { margin: 4rem }
.mt-5 { margin-top: 4rem }
.mr-5 { margin-right: 4rem }
.mb-5 { margin-bottom: 4rem }
.ml-5 { margin-left: 4rem }
.mx-5 { margin-left: 4rem; margin-right: 4rem }
.my-5 { margin-top: 4rem; margin-bottom: 4rem }

.ml-auto { margin-left: auto }
.mr-auto { margin-right: auto }
.mx-auto { margin-left: auto; margin-right: auto; }

.m-neg-05 { margin: -.25rem; }
.m-neg-1 { margin: -.5rem; }
.m-neg-2 { margin: -1rem; }
.m-neg-3 { margin: -2rem; }
.m-neg-4 { margin: -3rem; }
.m-neg-5 { margin: -4rem; }
`, 'css')
  ])

