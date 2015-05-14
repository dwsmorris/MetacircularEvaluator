(function () {
	'use strict';

	// Configure RequireJS to shim Jasmine
	requirejs.config({
		baseUrl: "./",
		paths: {
			'jasmine': 'node_modules/jasmine-core/lib/jasmine-core/jasmine',
			'jasmine-html': 'node_modules/jasmine-core/lib/jasmine-core/jasmine-html',
			'boot': 'node_modules/jasmine-core/lib/jasmine-core/boot',
			'squire': 'node_modules/squirejs/src/Squire'
		},	
		shim: {
			'jasmine': {
				exports: 'jasmine'
			},
			'jasmine-html': {
				deps: ['jasmine'],
				exports: 'jasmine'
			},
			'boot': {
				deps: ['jasmine', 'jasmine-html'],
				exports: 'jasmine'
			},
			"squire": {
				exports: "squire"
			}
		},
		urlArgs: "bust=" + (new Date()).getTime()
	});

	// Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
	// AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
	// we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
	// initialize the HTML Reporter and execute the environment.
	require(['boot'], function () {

		// Load the specs
		require([
			"spec/stub-spec"
		], function () {

			// Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
			window.onload();
		});
	});
})();