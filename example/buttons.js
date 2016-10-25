import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>    
  h('div', [
    header('buttons')
  , h('div', [
      h('div.col-6.inline-block.mb-1', [
        h('button', 'Learn more')
      , h('pre', 'default')
      ])
    , h('div.col-6.inline-block.mb-1', [
        h('button.btn--main', 'Create')
      , h('pre', ".btn--main")
      ])
    , h('div.col-6.inline-block.mb-1', [
        h('button.btn--danger', 'Delete')
      , h('pre', ".btn--danger")
      ])
    , h('div.col-6.inline-block.mb-1', [
        h('button', {props: {disabled : true}}, 'Loading...')
      , h('pre', 'disabled')
      ])
    ])
  ])

