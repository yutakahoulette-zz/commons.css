import h from 'snabbdom/h'

module.exports = _ => 
  h('div', [
    h('p.read.mb3', [
      h('strong', 'commons.css')
    , ' is comprised of '
    , h('a', {props: {href: 'http://www.basscss.com/'}}, 'Basscss ')
    , '(excluding the flexbox and type-scale modules) for low-level styling, '
    , h('a', {props: {href: 'https://github.com/filipelinhares/ress'}}, 'ress ')
    , 'for normalizing, and additional styles for:' 
    ])
  , h('div', [
      h('a.inline-block.col-4.mb2', {props: {href: '#anchors'}}, 'Anchors')
    , h('a.inline-block.col-4.mb2', {props: {href: '#background-colors'}}, 'Background colors')
    , h('a.inline-block.col-4.mb2', {props: {href: '#blockquote'}}, 'Blockquotes')
    , h('a.inline-block.col-4.mb2', {props: {href: '#buttons'}}, 'Buttons')
    , h('a.inline-block.col-4.mb2', {props: {href: '#containers'}}, 'Containers')
    , h('a.inline-block.col-4.mb2', {props: {href: '#form-elements'}}, 'Form Elements')
    , h('a.inline-block.col-4.mb2', {props: {href: '#lists'}}, 'Lists')
    , h('a.inline-block.col-4.mb2', {props: {href: '#tables'}}, 'Tables')
    , h('a.inline-block.col-4.mb2', {props: {href: '#text-colors'}}, 'Text colors')
    , h('a.inline-block.col-4.mb2', {props: {href: '#type-scale'}}, 'Type scale')
    , h('a.inline-block.col-4.mb2', {props: {href: '#utilities'}}, 'Utilities')
    ])
  , h('p.read', [
      h('strong', 'common.css ')
    , 'aims to be performant, and easy to use by minimizing the number of class names that you have to keep track of. We encourage the use of combining existing classes in the markup to create new UIs instead of writing additional styles. Check out the '
    , h('a', {props: {href: '#examples'}}, 'examples')
    , '.'
    ])
  ])
