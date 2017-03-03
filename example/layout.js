import h from 'snabbdom/h'
import title from './title'
import code from './code'
import section from './section'


module.exports = _ => {
  const content = h('div', [
    title('Layout')
  , code(
`.inline       { display:inline }
.block        { display:block }
.inline-block { display:inline-block }
.table        { display:table }
.table-cell   { display:table-cell }

.middle-cell {
  display: table-cell;
  vertical-align: middle;
}

.overflow-hidden { overflow:hidden }
.overflow-scroll { overflow:scroll }
.overflow-auto   { overflow:auto }

.clearfix:after { clear:both }
.clearfix:before,
.clearfix:after {
  content:" ";
  display:table
}

.left  { float:left }
.right { float:right }

.max-width-100  { max-width: 100px }
.max-width-200  { max-width: 200px }
.max-width-300  { max-width: 300px }
.max-width-400  { max-width: 400px }
.max-width-500  { max-width: 500px }
.max-width-600  { max-width: 600px }
.max-width-700  { max-width: 700px }
.max-width-800  { max-width: 800px }
.max-width-full { max-width: 100% }

.width-50 { width: 50px }
.width-100  { width: 100px }
.width-150 { width: 150px }
.width-200  { width: 200px }
.width-250  { width: 250px }
.width-300  { width: 300px }
.width-full { width: 100% }

.min-width-50 { min-width: 50px }
.min-width-100  { min-width: 100px }
.min-width-150 { min-width: 150px }
.min-width-200  { min-width: 200px }
.min-width-250  { min-width: 250px }
.min-width-300  { min-width: 300px }

.height-full { height: 100% }

@media (max-width: 780px) {
  .md-inline       { display:inline }
  .md-block        { display:block }
  .md-inline-block { display:inline-block }
  .md-table        { display:table }
  .md-table-cell   { display:table-cell }
}

@media (max-width: 480px) {
  .sm-inline       { display:inline }
  .sm-block        { display:block }
  .sm-inline-block { display:inline-block }
  .sm-table        { display:table }
  .sm-table-cell   { display:table-cell }
}



`, 'css')
  ])
  return section('layout', content)
}


