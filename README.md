# grid.js

Draws a grid in your html5 canvas

## Usage

Get a reference to the JavaScript file in the page head:
```html
<script type="text/javascript" src="dist/grid.js"></script>
```

Assume that we have a HTML5 canvas element:
```html
<canvas id="myCanvas" width="350" height="200"></canvas>
```

Use grid in JavaScript code like this when you want to pass your own options:
```javascript
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var opts = {
	distance : 20,
	lineWidth : 1.5,
	gridColor : "green",
	caption : true
};
new Grid(opts).draw(context);
```
or like this without options:
```javascript
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

new Grid().draw(context);
```