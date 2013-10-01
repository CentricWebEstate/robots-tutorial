_selfOnce('wires.main');

Wires = (function () {
	this.context = window.document.createElement('canvas');
	window.document.body.appendChild(this.context);

	return {
		_canvas:this.context,
		_context:this.context.getContext('2d'),
		getContext: function() {return this._context}
	};
})();