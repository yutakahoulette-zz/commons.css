'use strict'

module.exports = {
  use: ['postcss-import', 'autoprefixer', 'precss']
, 'local-plugins' : true
, 'autoprefixers' : {browsers: 'last 2'}
, input: 'src/index.css'
, dir: 'css'
}

