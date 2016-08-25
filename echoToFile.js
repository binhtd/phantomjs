"use strict";

var fs = require("fs"),
    sys = require("system");

if (sys.args.length < 3)
{
	console.log("Usage: echoToFile.js DESTINATION_FILE <arguments to echo ...>");
	phantom.exit();
}
else{
	var content = "",
	    f = null,
	    i;
	for (i=2; i < sys.args.length; ++i){
		content += sys.args[i] + (i === sys.args.length - 1 ? "": " ");
	}

	try {
		fs.write(sys.args[1], content, "w");
	}
	catch(e){
		console.log(e);
	}
	phantom.exit();
}
