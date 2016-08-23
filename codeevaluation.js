var page = require("webpage").create();
page.open('http://dantri.com.vn', function(status) {
	var name = "binhtd";
	var title = page.evaluate(function() {
		console.log("My name is " + name);
		return document.title + " : " + name;
	});

	console.log("Page title is " + title);
	phantom.exit();
});
