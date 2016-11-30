module.exports = {
  use: [
    'postcss-import'
  , 'precss'
  , 'postcss-color-function'
  , 'autoprefixer']
, 'local-plugins' : true
, 'autoprefixer' : {browsers: 'last 2 versions'}
, input: 'src/index.css'
, dir: 'lib'
}

