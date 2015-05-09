(function () {
	'use strict';

	// Configure RequireJS to shim Jasmine
	requirejs.config({
		baseUrl: "../App",
		paths: {
			'jasmine': '../Jasmine/lib/jasmine/jasmine',
			'jasmine-html': '../Jasmine/lib/jasmine/jasmine-html',
			'boot': '../Jasmine/lib/jasmine/boot', // This is not present in Jasmine 1.3
			'spec': '../Jasmine/spec',
			'squire': '../Jasmine/squire',
			//'knockout': '../Scripts/knockout-2.3.0',
			//'jquery': '../Scripts/jquery-1.10.2' // This only used in the Jasmine 1.3 case.
			'knockout': '../Scripts/knockout',
			'jquery': '../Scripts/jquery' // This only used in the Jasmine 1.3 case.
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
		}
	});

	// Define all of your specs here. These are RequireJS modules.
	var specs = [
      'spec/hello-spec'
	];

	// Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
	// AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
	// we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
	// initialize the HTML Reporter and execute the environment.
	require(['boot'], function () {

		// Load the specs
		require(specs, function () {

			// Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
			window.onload();
		});
	});

	/******
     * Use this require if you're on Jasmine 1.3
     ******/
	//require(['jquery', 'jasmine-html'], function ($, jasmine) {
	//  var jasmineEnv = jasmine.getEnv();
	//  jasmineEnv.updateInterval = 1000;

	//  var htmlReporter = new jasmine.HtmlReporter();

	//  jasmineEnv.addReporter(htmlReporter);

	//  jasmineEnv.specFilter = function(spec) {
	//      return htmlReporter.specFilter(spec);
	//  };

	//  $(function() {
	//      require(specs, function(spec) {
	//          jasmineEnv.execute();
	//      });
	//  });
	//});

	// end 1.3
})();