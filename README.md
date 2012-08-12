# grid.js

Draws a grid in your html5 canvas

 * FeatureList (not yet)

## Usage

Assume that we have a HTML5 canvas element:
```html
<canvas id="myCanvas" width="600" height="200"></canvas>
```

Use grid like this:
```javascript
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var opts = {
	distance : 20,
	lineWidth : 1.5,
	color : "green",
	caption : true
};
new Grid(opts).draw(context);
```

