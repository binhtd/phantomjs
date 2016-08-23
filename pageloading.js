var page = require("webpage").create();

page.open('http://vietnamnet.vn/', function(status) {
	console.log("Status:" + status);
	
	if (status === "success") {
		page.render("./vietnamnet.png");
	}
	phantom.exit();
});
