/*globals define, describe, it, expect*/

define([
    "../js/stub"
], function (
    stub
) {

    describe("stub", function() {
    	it("returns a new stub when invoked", function () {
    		expect(typeof stub()).toBe("object");
    	});
		
    	it("returns an overriden defined property", function () {
    		var newStub = stub({
				property: 1
    		});

            expect(newStub.property).toBe(1);
        });
    	
        it("returns a stub when an undefined property is called on it", function() {
        	expect(typeof stub().property).toBe("object");
        });

        it("returns an overridden defined method", function() {
        	var newStub = stub({
        		method: function () {
        			return 1;
        		}
        	});

        	expect(newStub.method()).toBe(1);
        });
		
        it("returns a stub when an array accessor is called on it", function () {
        	expect(typeof stub()[0]).toBe("object");
        });

	});

});