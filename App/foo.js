define(['knockout'], function (ko) {

	var message = ko.observable("Go away, World!");

	return {
		message: message()
	};
});
