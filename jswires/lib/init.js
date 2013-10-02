define(['wires/globals/include', 'wires/third-party/domReady'], function(include2, doc) {
	(function () {
		include = include2.include.bind(include2);
		_selfOnce = include2._selfOnce.bind(include2);
		_getAppContext = include2._getAppContext.bind(include2);
		_setAppContext = include2._setAppContext.bind(include2);
		log = window.console.log.bind(console);
		include('Main');
		(function () { _getAppContext().Main.__init__(); })();
	})();
});