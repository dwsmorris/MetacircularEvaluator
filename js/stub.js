/*globals define, Proxy*/

define(function () {

    var getStub = function() {
    	return Proxy.createFunction({ // properties
    		get: function (target, name) {
    			// return name in target ? target[name] : getStub();
    			return getStub();
    		},
    		set: function (target, name, value) {
    		}
    	}, function () { // invocation
    		return getStub();
    	});
    };

    return getStub();

});