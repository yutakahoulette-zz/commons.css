includes utility classes + styles for core UI components:

**docs:** [http://yutakahoulette.com/commons.css/](http://yutakahoulette.com/commons.css/)

to use: `npm install --save --save-dev commons.css`

module list:

- align
- aspect
- background
- blockquote
- border
- button
- cursor
- dissabled
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
- toggle-scale
- type-scale
- typography

i recommond using postcss and postcss-import for managing/building css:

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
    "commons.css": "0.0.1"
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
@import 'commons.css';

body {
  font-family: 'Comic Sans';
  etc...
}

```

```
npm run watch-css
```

