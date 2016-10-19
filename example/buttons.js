import h from 'snabbdom/h'
import header from './header'

module.exports = _ =>    
  h('div', [
    header('Buttons', 'buttons')
  , h('div.mt2', [
      h('div.col-4.inline-block.mb1', [
        h('button', 'Learn more')
      , h('pre', 'default')
      ])
    , h('div.col-4.inline-block.mb1', [
        h('button.btn--main', 'Create')
      , h('pre', ".btn--main")
      ])
    , h('div.col-4.inline-block.mb1', [
        h('button.btn--danger', 'Delete')
      , h('pre', ".btn--danger")
      ])
    , h('div.col-4.inline-block.mb1', [
        h('button.btn--edit', 'Edit profile')
      , h('pre', ".btn--edit")
      ])
    , h('div.col-4.inline-block.mb1', [
        h('button', {props: {disabled : true}}, 'Loading...')
      , h('pre', 'disabled')
      ])
    ])
  ])

