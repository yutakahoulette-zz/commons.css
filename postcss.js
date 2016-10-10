module.exports = {
  use: [
    'postcss-import'
  , 'precss'
  , 'postcss-custom-media'
  , 'postcss-custom-properties'
  , 'postcss-calc'
  , 'postcss-remove-root'
  , 'autoprefixer']
, 'local-plugins' : true
, 'autoprefixers' : {browsers: 'last 3'}
, input: 'src/index.css'
, dir: 'lib'
}

