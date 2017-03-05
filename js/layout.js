const h = require('snabbdom/h')
const code = require('./code')

module.exports = 
  h('div', [
    code(
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

.max-width-1  { max-width: 15rem }
.max-width-2  { max-width: 30rem }
.max-width-3  { max-width: 45rem }
.max-width-4  { max-width: 60rem }

.width-0 {width: 0}

.width-full { width: 100% }

.height-half { height: 50% }
.height-full { height: 100% }

@media (max-width: 45em) {
  .md-inline       { display:inline }
  .md-block        { display:block }
  .md-inline-block { display:inline-block }
  .md-table        { display:table }
  .md-table-cell   { display:table-cell }
}

@media (max-width: 30em) {
  .sm-inline       { display:inline }
  .sm-block        { display:block }
  .sm-inline-block { display:inline-block }
  .sm-table        { display:table }
  .sm-table-cell   { display:table-cell }
}
`, 'css')
  ])

