define(['squire'], function (Squire) {

	describe('hello', function () {
		var hello;

		beforeEach(function (done) {
			new Squire().mock('foo', {
				message: "Hello, World!"
			}).require(['hello'], function (hi) {
				hello = hi;
				done();
			});
		});

		it('is welcoming', function () {
			expect(hello.message).toBe("Hello, World!");
		});
	});

	describe('hello no mock foo', function () {
		var hello;

		beforeEach(function (done) {
			require(['hello'], function (hi) {
				hello = hi;
				done();
			});
		});

		it('is less than welcoming', function () {
			expect(hello.message).toBe("Go away, World!");
		});
	});
});