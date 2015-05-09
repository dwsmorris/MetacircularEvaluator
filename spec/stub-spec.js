/*globals define, describe, it, expect*/

define([
    "../js/stub"
], function (
    stub
) {

    describe("stub", function() {
    	it("returns a new stub when invoked", function () {
    		expect(typeof stub()).toEqual("function");
    	});

    	it("returns an overriden defined property", function () {
            var newStub = stub();
            newStub.property = 1;

            expect(newStub.property).toEqual(1);
        });
		
        it("returns an overriden property set to undefined", function () {
        	var newStub = stub();
        	newStub.property = undefined;

        	expect(newStub.property).toEqual(undefined);
        });
		
        it("returns a stub when an undefined property is called on it", function() {
        	expect(typeof stub().property).toEqual("function");
        });

        it("returns an overridden defined method", function() {
        	var newStub = stub();
        	newStub.method = function () {
                return 1;
            };

        	expect(newStub.method()).toEqual(1);
        });

        it("returns a stub when an array accessor is called on it", function () {
        	expect(typeof stub()[0]).toEqual("function");
        });
    });

});