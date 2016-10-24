import h from 'snabbdom/h'
import hyph from './hyphenate' 
import cap from './capitalize' 

module.exports = txt =>
  h('h3.inline-block.mb-2.mt-4', {props: {id: hyph(txt)}}, cap(txt))

