import h from 'snabbdom/h'
import title from './title'
import section from './section'

module.exports = _ => {
  const content = h('div', [
    title('Buttons')
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
  return section('buttons', content)
}

