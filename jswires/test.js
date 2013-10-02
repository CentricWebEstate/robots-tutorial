include('wires.main');
_selfOnce('wires.test');



Module.Wires.Test = (function () {
	var self = Module.Wires.Main;
	return {
		testWires: function ()
		{
			var context = self._context;
			context.font = "18px black";
			context.textBaseline = "top";
			context.fillText('Welcome to JSWires', 10, 10);
		}
	};
})();