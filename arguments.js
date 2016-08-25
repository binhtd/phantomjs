"use strict";

var system = require("system");

if (system.args.length  === 1)
{
	console.log("Try to pass some args when invoking this script!");
}
else
{
	system.args.forEach(function(arg, index) {
		console.log ("Index:" + index + ", argument value:" + arg);
	});
}
phantom.exit();
