include ('wires');

var Wires = Module.Wires;

Module.Main = {
	__init__ : function () {
		log('Initialising Game');
		Wires.Test.testWires();
	}
}