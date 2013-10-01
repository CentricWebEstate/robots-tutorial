requirejs.config({
	baseUrl: '',

	paths: {
		wires : 'jswires'
	}
});

requirejs(['wires/globals/include'], function(include2) {
	include = include2.include.bind(this);
	_selfOnce = include2._selfOnce;
	log = window.console.log.bind(console);
	include('Main');
	
	window.onload = Main.__init__();
});