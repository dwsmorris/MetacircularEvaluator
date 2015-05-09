define(['squire'], function (Squire) {

	var injector = new Squire();
	var builder = injector
        .mock('foo', {
        	message: "Hello, World!"
        });

	describe('hello', function () {
		var hello;

		beforeEach(function (done) {
			// For async:
			// accept a "done" parameter and Jasmine will wait...
			builder.require(['hello'], function (hi) {
				hello = hi;
				done(); // ...until you invoke it.
			});

			/*******
             * Use the following if you're on 1.3
             *********/
			//var done;
			//runs(function () {
			//    builder.require(['hello'], function (hi) {
			//        hello = hi;
			//        done = true;
			//    });
			//});

			//waitsFor(function () {
			//    return done;
			//}, "Unable to load dependency not loaded", 750);

			// end 1.3
		});

		it('is welcoming', function () {
			expect(hello.message).toBe("Hello, World!");
		});
	});

	describe('hello no mock foo', function () {
		var hello;

		beforeEach(function (done) {
			// For async:
			// accept a "done" parameter and Jasmine will wait...
			require(['hello'], function (hi) {
				hello = hi;
				done(); // ...until you invoke it.
			});

			/*******
             * Use the following if you're on 1.3
             *********/
			//var done;
			//runs(function () {
			//    require(['hello'], function (hi) {
			//        hello = hi;
			//        done = true;
			//    });
			//});

			//waitsFor(function () {
			//    return done;
			//}, "Unable to load dependency not loaded", 750);

			// end 1.3
		});

		it('is less than welcoming', function () {
			expect(hello.message).toBe("Go away, World!");
		});
	});
});