"use strict";

if ( typeof(phantom) !== "undefined"){
	var page = require("webpage").create();
	
	//route console.log calls from within the page context to the main phantom context ie current this
	page.onConsoleMessage = function (msg) {
		console.log(msg);
	}
	
	page.onAlert = function (msg) {
		console.log(msg);
	}

	console.log("* Script running in the phantom context.");
	console.log("* Script will inject itself in a page ...");
	page.open("about:blank", function (status) {
		if (status === "success"){
			console.log(page.injectJs("injectme.js") ? "... done injecting itself!" : "... fail! Check the $PWD?!";
		}
		phantom.exit();
	});
}
else{
	alert(" * Script running in the Page context.");
}
