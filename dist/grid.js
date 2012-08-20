//enterprisbug.github.com/grid.js#v1.1
(function(window, document, undefined) {
	function mergeWithDefaultValues(obj) {
		for (var i = 1; i < arguments.length; i++) {
			var def = arguments[i];
			for (var n in def) {
				if (obj[n] === undefined) {
					obj[n] = def[n];
				}
			}
		}
		return obj;
	}

	var defaults = {
		distance : 50,
		lineWidth : 1,
		gridColor : "#000000",
		caption : true,
		font: "10px Verdana"
	};
	
	/** The constructor */
	var Grid = function Grid(o) {
		if (!this.draw) return new Grid(o);
		this.opts = mergeWithDefaultValues(o || {}, Grid.defaults, defaults);
	};
	
	Grid.defaults = {};
	mergeWithDefaultValues(Grid.prototype, {
		draw: function(target) {
			var self = this;
			var o = self.opts;
			
			if (target) {
				target.save();

				target.lineWidth = o.lineWidth;
				target.strokeStyle = o.gridColor;
				target.font = o.font;
				
				for (var y = 0; y <= target.canvas.width; y += o.distance) {
					target.beginPath();
					target.moveTo(0, y);
					target.lineTo(target.canvas.width, y);
					target.closePath();
					target.stroke();
					if (o.caption)
					{
						target.fillText(y, y, 10);
					}
				}
				
				for (var x = 0; x <= target.canvas.width; x += o.distance) {
					target.beginPath();
					target.moveTo(x, 0);
					target.lineTo(x, target.canvas.height);
					target.closePath();
					target.stroke();
					if (o.caption)
					{
						target.fillText(x, 0, x);
					}
				}
				
				target.restore();
			}
		}
	});

  window.Grid = Grid;

})(window, document);