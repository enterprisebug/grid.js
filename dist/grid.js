(function(window, document, undefined) {
	/**
	 * Fills in default values.
	 */
	function merge(obj) {
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
		distance : 10,
		lineWidth : 0.5,
		color : "black",
		caption : true
	};
	
	/** The constructor */
	var Grid = function Grid(o) {
		if (!this.draw) return new Grid(o);
		this.opts = merge(o || {}, Grid.defaults, defaults);
	};
	
	Grid.defaults = {};
	merge(Grid.prototype, {
		draw: function(target) {
			var self = this;
			var o = self.opts;
			
			if (target) {
				target.save();

				target.lineWidth = o.lineWidth;
				target.strokeStyle = o.color;
				
				for (var i = 0; i <= target.canvas.width; i = i + o.distance) {
					target.beginPath();
					target.moveTo(0, i);
					target.lineTo(target.canvas.width, i);
					target.closePath();
					target.stroke();
				}
				
				for (var j = 0; j <= target.canvas.width; j = j + o.distance) {
					target.beginPath();
					target.moveTo(j, 0);
					target.lineTo(j, target.canvas.height);
					target.closePath();
					target.stroke();
				}
				
				target.restore();
			}
		}
	});

  window.Grid = Grid;

})(window, document);