# vue-light-tooltip
A simple and lightweight tooltip for Vue JS.

### Install vue-light-tooltip

```
npm install --save vue-light-tooltip
```

### Using vue-light-tooltip
* type = type of parent element on which the tooltip appears when hovered upon example - span, button etc.
* parent = text in parent element. (HTML is also supported)
* tooltipText = text in tooltip.
* :styles = apply style to parent element (supply style as object).

```
<template>
  <div class="hello">
    <h1>Hello World!</h1>
    <tooltip parent="Hover here" type="span" tooltipText="Tooltip appears!" :styles="{color:'red', 'font-size':'24px'}>
    </tooltip>
  </div>
</template>

<script>
import tooltip from 'vue-light-tooltip';

export default {
  name: 'HelloWorld',
  components: {
     tooltip,
  },
};
</script>
<style>
 // styles come here
</style>
```

### Dynamically disable tooltip

Use disabled flag to dynamically disable tooltip in runtime. By default the value is set "false".
```
<tooltip parent="Hover here" type="span" tooltipText="Tooltip appears!" v-bind:disabled="true">
</tooltip>
```

### Position of tooltip

Use position flag to set position of tooltip. By default the value is "up".
```
<tooltip parent="Hover here" type="span" tooltipText="Tooltip appears!" position="down">
</tooltip>
```

### Adjust length of tooltip

Use length flag to set length of tooltip. By default the value is "small".
```
<tooltip parent="Hover here" type="span" tooltipText="Tooltip appears!" length="large">
</tooltip>
```
### Using Glyphs and Icon fonts in Tooltip

You can use Html special characters, emojis or third party fonts like "Font awesome".
```
<tooltip parent="Hover here" type="span" tooltipText="Tooltip has HTML special characters: &#9787; &#9986; &#9820;">
</tooltip>
```
```
<tooltip parent="Hover here" type="span" tooltipText="Tooltip has Emojis: 😀 😬 😁 😂 😃 😄 😅 😆">
</tooltip>
```
```
<tooltip parent="Hover here" type="span" tooltipText="Tooltip Font Awesome Icons: &#xf030; &#xf133; &#xf1fc; &#xf03e;">
</tooltip>
```

### Inputs for vue-light-tooltip

* parent - HTML, text.
* tooltip - text, glyph, emoji, icon.
* position - up, down, right, left, up-right, up-left, down-right, down-left.
* disabled - boolean (true, false).
* length - small, medium, large, xlarge, fit.
* style - object.

### Contribution guidelines

1. Clone the project.
2. Make a pull request.

## Credits

Made by Sree Krishna Raja [Github@sreekrishnaraja](https://github.com/sreekrishnaraja) [Twitter@sreekrishnaraja](https://twitter.com/sreekrishnaraja)

CSS is taken from source code of [Balloon CSS](https://github.com/kazzkiq/balloon.css) by [kazzkiq](https://github.com/kazzkiq) which is published under MIT license.

This library (vue-light-tooltip) is Published under MIT license.
