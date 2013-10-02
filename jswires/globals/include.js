define(function () {
	String.prototype.in = function (arr)
	{
		if(Object.prototype.toString.call(arr) !== '[object Array]') return;
		value = this.toString();
		for(var i = 0; i<arr.length; i++)
		{
			val = arr[i];
			if(Object.prototype.toString.call(val) === '[object Array]') return value.in(val);
			if(val == value) return true;
		}
		return false;
	}
	a = function(){};

	return {
		magic : new Array(),
		context: {},
		include : function (toImport) {
			if(typeof toImport !== 'string')
			{
				window.console.error('Failed to import because argument was not a string');
				return;
			}

			if(toImport.in(this.magic))
			{
				return;
			}
			var requestObj = (function(s,a){for(a=[a="Msxml2.XMLHTTP",a+".3.0",a+".6.0"];;)try{s=a.pop();return new(s?ActiveXObject:XMLHttpRequest)(s)}catch(e){}}),
				request = new requestObj(),
				map = {
					wires : 'jswires'
				};
			toImport = toImport.split('.');
			toImport = toImport.map(function (single) {
				if(map[single]) return map[single];
				return single.toLowerCase(); 
			});
			toImportIndex = toImport.join('/') + '/index.js';
			toImport = toImport.join('/') + '.js';

			request.open('GET', toImport, false);
			evalResponse = function (triedIndex) {
				if(request.readyState == 4)
				{
					switch (request.status)
					{
						case 200:
							eval('(function(Module){ ' + request.responseText + ';; _setAppContext(Module)}).call(new Function(), _getAppContext())');
							return ;
						case 404:
							if (triedIndex != true)
							{
								request.open('GET', toImportIndex, false);
								a = function () {evalResponse(true);};
								request.onreadystatechange = evalResponse;
								request.send();
								break;
							}
						default:
							throw new Error('Failed to load resource ' + toImport);
					}
					
				}
				return;
			};

			request.onreadystatechange = evalResponse;
			request.send();
		},
		_selfOnce : function (toImport) { this.magic.push(toImport); },
		_getAppContext : function () {return this.context; },
		_setAppContext : function (context) {return this.context = context; }
	}
});