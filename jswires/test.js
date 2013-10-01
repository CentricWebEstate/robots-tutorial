include('wires.main');
_selfOnce('wires.test');

Wires.testWires = function ()
{
	var context = this._context;
	context.font = "18px black";
	context.textBaseline = "top";
	context.fillText('Welcome to JSWires', 10, 10);
}