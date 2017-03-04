module.exports = {
  use: [
    'postcss-import'
  , 'precss'
  , 'autoprefixer'
  , 'cssnano']
, 'local-plugins' : true
, 'autoprefixer' : {browsers: 'last 2 versions'}
, input: 'index.css'
, output: 'build.css'
}

