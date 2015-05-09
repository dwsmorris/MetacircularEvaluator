define(['squire', "../js/stub"], function (Squire, stub) {

	describe('hello', function () {
		var hello;

		beforeEach(function (done) {
			new Squire().mock('foo', {
				message: "Hello, World!"
			}).require(['../js/hello'], function (hi) {
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
			new Squire().mock('foo', stub()).require(['../js/hello'], function (hi) {
				hello = hi;
				done();
			});
		});

		it('is less than welcoming', function () {
			expect(typeof hello.message).toEqual("function");
		});
	});
});