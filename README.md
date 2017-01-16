includes utility classes + styles for core UI components:

**docs:** http://docs.commitchange.com/commons.css/

to use: `npm install --save-dev @commitchange/commons.css`

module list:

- align
- background
- blockquote
- border
- button
- color
- cursor
- form
- grid
- help box
- hide
- layout
- list
- margin
- misc
- opacity
- padding
- position
- progress bar
- shadow
- table
- tabs
- type-scale
- typography

We recommond using postcss and postcss-import for managing/building css:

### example:

package.json
```javascript
{
  "scripts": {
    "build-css": "postcss -c postcss-config.js",
    "watch-css": "postcss -c postcss-config.js -w"
   },
  "devDependencies": {
    "postcss": "5.2.4",
    "postcss-cli": "2.6.0",
    "postcss-import": "8.1.2",
    "@commitchange/commons.css": "0.0.1"
  }
  etc...
}
```

postcss-config.js
```javascript
module.exports = {
  use: ['postcss-import']
, 'local-plugins' : true
, input: 'index.css'
, output: 'build.css'
}
```

index.css
```css
@import '@commitchange/commons.css';

body {
  font-family: 'Comic Sans';
  etc...
}

```

```
npm run watch-css
```

