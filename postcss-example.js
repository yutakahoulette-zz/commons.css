module.exports = {
  use: [
    'postcss-import'
  , 'precss'
  , 'postcss-color-function'
  , 'autoprefixer']
, 'local-plugins' : true
, 'autoprefixer' : {browsers: 'last 2 versions'}
, input: 'example/index.css'
, output: 'example/build.css'
}

