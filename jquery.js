var page = require("webpage").create();
page.open('http://dantri.com.vn', function() {
	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
	    page.evaluate(function() {
	      $("button").click();
	    });
	    phantom.exit()
	});
});