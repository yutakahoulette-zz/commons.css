import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'
import responsiveText from './responsive-text' 


const demo = h('div.border.code.p-3.md-p-2.sm-p-1.mb-1', '.p-3.md-p-2.sm-p-1')

module.exports = _ => {
  const content = h('div', [
    title('Padding')
  , demo
  , h('p.helpBox--success', responsiveText) 
  , code(
`
.p-0  { padding:0 }
.pt-0 { padding-top:0 }
.pr-0 { padding-right:0 }
.pb-0 { padding-bottom:0 }
.pl-0 { padding-left:0 }
.px-0 { padding-left:0; padding-right:0 }
.py-0 { padding-top:0;  padding-bottom:0 }

.p-1  { padding: .5rem }
.pt-1 { padding-top: .5rem }
.pr-1 { padding-right: .5rem }
.pb-1 { padding-bottom: .5rem }
.pl-1 { padding-left: .5rem }
.py-1 { padding-top: .5rem; padding-bottom: .5rem }
.px-1 { padding-left: .5rem; padding-right: .5rem }

.p-2  { padding: 1rem }
.pt-2 { padding-top: 1rem }
.pr-2 { padding-right: 1rem }
.pb-2 { padding-bottom: 1rem }
.pl-2 { padding-left: 1rem }
.py-2 { padding-top: 1rem; padding-bottom: 1rem }
.px-2 { padding-left: 1rem; padding-right: 1rem }

.p-3  { padding: 2rem }
.pt-3 { padding-top: 2rem }
.pr-3 { padding-right: 2rem }
.pb-3 { padding-bottom: 2rem }
.pl-3 { padding-left: 2rem }
.py-3 { padding-top: 2rem; padding-bottom: 2rem }
.px-3 { padding-left: 2rem; padding-right: 2rem }

.p-4  { padding: 3rem }
.pt-4 { padding-top: 3rem }
.pr-4 { padding-right: 3rem }
.pb-4 { padding-bottom: 3rem }
.pl-4 { padding-left: 3rem }
.py-4 { padding-top: 3rem; padding-bottom: 3rem }
.px-4 { padding-left: 3rem; padding-right: 3rem }

.p-5  { padding: 4rem }
.pt-5 { padding-top: 4rem }
.pr-5 { padding-right: 4rem }
.pb-5 { padding-bottom: 4rem }
.pl-5 { padding-left: 4rem }
.py-5 { padding-top: 4rem; padding-bottom: 4rem }
.px-5 { padding-left: 4rem; padding-right: 4rem }`, 'css')
  ])
  return section('padding', content)
}


